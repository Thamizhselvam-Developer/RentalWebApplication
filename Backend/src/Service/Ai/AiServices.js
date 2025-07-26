const AiModelData = require("../../Model/Ai/AiModelData");
const axios = require("axios");
const { predictPrice, isReady, waitForModel } = require('../../Middleware/Ai Data');

// Helper: Normalize vehicle type
const normalizeVehicleType = (type) => {
  if (!type) return 'car';
  const lowerType = type.toLowerCase().trim();
  const typeMapping = {
    'sedan': 'car',
    'hatchback': 'car',
    'coupe': 'luxury',
    'convertible': 'luxury',
    'sports': 'luxury',
    'truck': 'van',
    'pickup': 'van',
    'minivan': 'mini_van',
    'mini-van': 'mini_van',
    'scooter': 'bike',
    'bicycle': 'bike',
    'motorbike': 'motorcycle',
    'cruiser': 'motorcycle',
    'sports bike': 'motorcycle'
  };
  return typeMapping[lowerType] || lowerType;
};

// Helper: Generate reasons for price adjustment
const getPricingReason = (vehicleData, adjustment) => {
  const reasons = [];
  if (vehicleData.temperature > 35) reasons.push("hot weather premium");
  else if (vehicleData.temperature < 5) reasons.push("cold weather discount");

  const vehicleAge = 2024 - vehicleData.modelYear;
  if (vehicleAge < 2) reasons.push("new vehicle premium");
  else if (vehicleAge > 10) reasons.push("older vehicle adjustment");

  if (vehicleData.vehicleType === 'luxury') reasons.push("luxury vehicle factor");
  else if (['motorcycle', 'bike'].includes(vehicleData.vehicleType)) reasons.push("weather sensitive vehicle");

  if (adjustment > 0.2) reasons.push("high demand conditions");
  else if (adjustment < 0.05) reasons.push("stable market conditions");

  return reasons.length > 0 ? reasons.join(", ") : "standard market adjustment";
};

// Helper: Get user's lat/lon based on IP
const getUserLocation = async () => {
  const res = await axios.get('http://ip-api.com/json/');
  const { lat, lon } = res.data;
  return { latitude: lat, longitude: lon };
};

// Helper: Get temperature using coordinates
const getCurrentTemperature = async (latitude, longitude) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`;
  const res = await axios.get(url);
  return res.data.current.temperature_2m;
};

// ✅ Main AI Pricing Logic
const AiServices = async (sql) => {
  try {
    console.log("🔥 Running AiServices with dynamic pricing logic");

    const vehicles = await AiModelData.AiModelData(sql);
    if (!vehicles || vehicles.length === 0) {
      return { error: "No data returned", data: [] };
    }
    console.log(vehicles,"asdfasdfasdfasdfasdfas")

    let temperature = 25;
    try {
      const { latitude, longitude } = await getUserLocation();
      temperature = await getCurrentTemperature(latitude, longitude);
      if (temperature < -20 || temperature > 50) temperature = 25;
    } catch {
      console.warn("⚠️ Weather fetch failed. Defaulting temp.");
    }

    const enrichedData = [];

    for (let vehicle of vehicles) {
      let basePrice = parseFloat(vehicle.price) || 1000;
      const vehicleType = normalizeVehicleType(vehicle.Vechiletype || vehicle.type || 'car');
      const modelYear = Math.max(2000, Math.min(2025, parseInt(vehicle.modelYear || vehicle.model) || 2020));

      try {
        const vehicleData = {
          temperature,
          vehicleType,
          modelYear,
          basePrice
        };

        const priceAdjustment = await predictPrice(vehicleData);
        const dynamicPrice = basePrice + (basePrice * priceAdjustment);
        const priceChange = dynamicPrice - basePrice;
        const priceChangePercent = ((priceChange / basePrice) * 100).toFixed(1);

        // 🌡️ Generate custom message
        const pricingReason = getPricingReason(vehicleData, priceAdjustment);
        let pricingMessage = "";
        if (priceChange > 0) {
          pricingMessage = `This ${vehicleType} is priced higher due to ${pricingReason}.`;
        } else if (priceChange < 0) {
          pricingMessage = `This ${vehicleType} is priced lower due to ${pricingReason}.`;
        } else {
          pricingMessage = `This ${vehicleType} has standard pricing based on market conditions.`;
        }

        enrichedData.push({
          ...vehicle,
          basePrice,
          dynamicPrice: Math.round(dynamicPrice),
          priceAdjustment: Math.round(priceChange),
          priceChangePercent: `${priceChange >= 0 ? '+' : ''}${priceChangePercent}%`,
          pricingMessage,
          pricingFactors: {
            temperature,
            vehicleType,
            modelYear,
            climateImpact: Math.round(priceChange),
            adjustmentFactor: priceAdjustment.toFixed(3),
            pricingReason
          },
          aiPricing: true,
          enhancedAI: true,
          lastUpdated: new Date().toISOString()
        });
      } catch (err) {
        console.error(`❌ AI Pricing failed: ${vehicle.vehicle_name || vehicle.id}`, err.message);
        enrichedData.push({
          ...vehicle,
          basePrice,
          dynamicPrice: basePrice,
          priceAdjustment: 0,
          priceChangePercent: "0%",
          pricingMessage: "AI pricing could not be applied. Showing base price.",
          pricingFactors: {
            temperature,
            reason: "AI prediction failed"
          },
          fallback: true,
          aiPricing: false,
          enhancedAI: false,
          lastUpdated: new Date().toISOString()
        });
      }
    }

    return { data: enrichedData };

  } catch (err) {
    console.error("❌ Critical error in AiServices:", err.message);
    return { error: "Service failed", timestamp: new Date().toISOString() };
  }
};

module.exports = { AiServices };
