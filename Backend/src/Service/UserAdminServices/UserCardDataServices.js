
const CardDataModel = require("../../Model/USerAdminModel/CardDataModel")
   const axios = require('axios');
const tf = require('@tensorflow/tfjs-node');
const { predictPrice, isReady, waitForModel } = require('../../Middleware/Ai Data');

const LatestDateServices = async () => {
    console.log("🚀 Starting LatestDateServices with Enhanced AI");
    
    try {
        let date = [];
        for (let i = 0; i <= 3; i++) {
            date.push(new Date().getFullYear() - i);
        }

        console.log("📅 Fetching vehicles from recent model years:", date);
        const vehicles = await CardDataModel.LatestDataModel(date);

        if (!vehicles || vehicles.length === 0) {
            console.log("⚠️ No recent vehicles found");
            return { error: "No vehicles found for recent years", data: [] };
        }

        // AI model setup
        let useAIModel = false;
        let temperature = 25;

        try {
            const modelReady = await waitForModel(15000);
            if (modelReady) {
                useAIModel = true;
                console.log("✅ Enhanced AI Model is ready");

                try {
                    const { latitude, longitude } = await getUserLocation();
                    temperature = await getCurrentTemperature(latitude, longitude);

                    if (temperature < -20 || temperature > 50) {
                        console.log("⚠️ Out-of-range temperature, using default (25°C)");
                        temperature = 25;
                    }

                    // console.log(`🌡️ Current Temperature: ${temperature}°C`);
                } catch (weatherErr) {
                    console.error("⚠️ Failed to fetch weather, using default temperature:", weatherErr);
                }
            } else {
                console.log("⚠️ AI model not ready in time");
            }
        } catch (aiErr) {
            console.error("❌ Error checking AI model readiness:", aiErr);
        }

        // Process vehicles
        const enrichedData = [];
        let successfulPredictions = 0, failedPredictions = 0;

        for (let i = 0; i < vehicles.length; i++) {
            const vehicle = vehicles[i];
            // console.log(`🚗 Processing vehicle: ${vehicle.vehicle_name || 'Unknown'}`);

            let basePrice = parseFloat(vehicle.price) || 1000;
            if (basePrice <= 0) basePrice = 1000;

            if (useAIModel) {
                try {
                    const vehicleType = normalizeVehicleType(vehicle.Vechiletype || vehicle.type || 'car');
                    const modelYear = parseInt(vehicle.model) || parseInt(vehicle.modelYear) || 2020;
                    const validatedYear = Math.max(2000, Math.min(2025, modelYear));

                    const vehicleData = {
                        temperature,
                        vehicleType,
                        modelYear: validatedYear,
                        basePrice
                    };

                    const priceAdjustment = await predictPrice(vehicleData);
                    const dynamicPrice = basePrice + (basePrice * priceAdjustment);
                    const priceChange = dynamicPrice - basePrice;
                    const priceChangePercent = ((priceChange / basePrice) * 100).toFixed(1);

                    const pricingReason = getPricingReason(vehicleData, priceAdjustment);

                    enrichedData.push({
                        ...vehicle,
                        temperature,
                        basePrice,
                        dynamicPrice: Math.round(dynamicPrice),
                        priceAdjustment: Math.round(priceChange),
                        priceChangePercent: `${priceChange >= 0 ? '+' : ''}${priceChangePercent}%`,
                        pricingFactors: {
                            temperature,
                            vehicleType,
                            modelYear: validatedYear,
                            climateImpact: Math.round(priceChange),
                            adjustmentFactor: priceAdjustment.toFixed(3),
                            pricingReason
                        },
                        aiPricing: true,
                        enhancedAI: true,
                        lastUpdated: new Date().toISOString()
                    });

                    successfulPredictions++;

                } catch (err) {
                    console.error(`❌ AI pricing failed for vehicle ${vehicle.id || vehicle.vehicle_name}:`, err.message);

                    enrichedData.push({
                        ...vehicle,
                        basePrice,
                        dynamicPrice: basePrice,
                        priceAdjustment: 0,
                        priceChangePercent: '0%',
                        pricingFactors: {
                            temperature,
                            error: 'AI prediction failed'
                        },
                        fallback: true,
                        aiPricing: false,
                        enhancedAI: false,
                        lastUpdated: new Date().toISOString()
                    });

                    failedPredictions++;
                }
            } else {
                enrichedData.push({
                    ...vehicle,
                    basePrice,
                    dynamicPrice: basePrice,
                    priceAdjustment: 0,
                    priceChangePercent: '0%',
                    pricingFactors: {
                        temperature,
                        reason: 'AI model not available'
                    },
                    fallback: true,
                    aiPricing: false,
                    enhancedAI: false,
                    lastUpdated: new Date().toISOString()
                });
            }
        }

        // Return enriched results
        console.log("✅ Enhanced AI pricing complete for latest vehicles");
        return {
            data: enrichedData,
            metadata: {
                totalVehicles: vehicles.length,
                aiPredictions: successfulPredictions,
                fallbackPrices: failedPredictions + (useAIModel ? 0 : vehicles.length),
                enhancedAIUsed: useAIModel,
                temperature,
                timestamp: new Date().toISOString(),
                version: 'enhanced-v2.0'
            }
        };

    } catch (error) {
        console.error("❌ Error in LatestDateServices:", error);

        return {
            error: "Latest vehicle pricing failed",
            timestamp: new Date().toISOString()
        };
    }
};

const cardDataGetServicesByID = async(Id)=>{
 
      try {
    const Data = await CardDataModel.cardDataGetModelByID(Id);
    console.log(Data,"-----------------------------------------------------------------------------")
    if (!Data || Data.length === 0) {
      return { error: "No vehicle found", Data: null };
    }

    const vehicle = Data[0]; // assuming it returns a list with one object

     let arr=[]
         Data.map((items)=>{
         arr.push(items.image_name)
        })


    // ----- AI Dynamic Pricing Starts -----
    let basePrice = parseFloat(vehicle.price) || 1000;
    let dynamicPrice = basePrice;
    let pricingFactors = {
      reason: 'AI model not available',
    };

    let useAIModel = false;
    let temperature = 25;

    try {
      const modelReady = await waitForModel(10000); // AI readiness
      if (modelReady) {
        useAIModel = true;
        const { latitude, longitude } = await getUserLocation();
        temperature = await getCurrentTemperature(latitude, longitude);
        if (temperature < -20 || temperature > 50) temperature = 25;
      }
    } catch (err) {
      console.error("⚠️ AI init failed", err.message);
    }

    if (useAIModel) {
      try {
        const vehicleType = normalizeVehicleType(vehicle.Vechiletype || vehicle.type || 'car');
        const modelYear = parseInt(vehicle.model) || 2020;

        const vehicleData = {
          temperature,
          vehicleType,
          modelYear: Math.max(2000, Math.min(2025, modelYear)),
          basePrice,
        };

        const adjustment = await predictPrice(vehicleData);
        dynamicPrice = basePrice + (basePrice * adjustment);
        pricingFactors = {
          temperature,
          vehicleType,
          modelYear: vehicleData.modelYear,
          adjustmentFactor: adjustment.toFixed(3),
          priceChange: Math.round(dynamicPrice - basePrice),
          priceChangePercent: ((adjustment * 100).toFixed(1)) + '%',
          pricingReason: getPricingReason(vehicleData, adjustment),
        };
      } catch (err) {
        console.error("⚠️ Dynamic pricing failed", err.message);
      }
    }

    // ----- AI Dynamic Pricing Ends -----

    return {
      Data: {
        ...vehicle,
        basePrice,
        dynamicPrice: Math.round(dynamicPrice),
        pricingFactors,
        aiPricing: useAIModel,
        lastUpdated: new Date().toISOString(),
      },
      images: arr,
    };

  } catch (err) {
    console.log(err.message);
    return { error: err.message };
  }
}

const cardDataGetServices = async () => {
    console.log("🔥 SERVICE CALLED - Starting cardDataGetServices with Enhanced AI");
    
    try {
        // Get vehicle data first
        let vehicles;
        try {
            console.log("📊 Fetching vehicle data...");
            vehicles = await CardDataModel.cardDataGetModel();
            console.log(`📊 Retrieved ${vehicles.length} vehicles`);
            
            if (!vehicles || vehicles.length === 0) {
                console.log("⚠️ No vehicles found in database");
                return { error: "No vehicles available", data: [] };
            }
        } catch (dbError) {
            console.error("❌ Database error:", dbError);
            return { error: "Failed to fetch vehicle data" };
        }

        // Check if AI model is available
        console.log(`🔍 Initial model status: ${isReady()}`);
        
        let useAIModel = false;
        let temperature = 25; // Default fallback temperature
        
        // Try to initialize AI model (but don't fail if it doesn't work)
        try {
            console.log("⏳ Waiting for enhanced model to be ready...");
            const modelReady = await waitForModel(15000); // Slightly longer timeout for enhanced model
            
            if (modelReady) {
                console.log("✅ Enhanced AI Model is ready! Will use dynamic pricing...");
                useAIModel = true;
                
                // Get weather data only if model is ready
                try {
                    console.log("🌡️ Getting current weather data...");
                    const { latitude, longitude } = await getUserLocation();
                    temperature = await getCurrentTemperature(latitude, longitude);
                    // console.log(`🌡️ Current temperature: ${temperature}°C`);
                    
                    // Validate temperature range
                    if (temperature < -20 || temperature > 50) {
                        // console.log("⚠️ Temperature out of normal range, using default");
                        temperature = 25;
                    }
                } catch (weatherError) {
                    console.error("⚠️ Weather data failed, using default temperature:", weatherError);
                    temperature = 25;
                }
            } else {
                console.log("⚠️ Enhanced model not ready within timeout, using base prices only");
            }
        } catch (modelError) {
            console.error("⚠️ Enhanced AI Model initialization failed, using base prices:", modelError);
        }

        // Process vehicles with enhanced logic
        // console.log("🚗 Processing vehicles with enhanced AI pricing...");
        const enrichedData = [];
        let successfulPredictions = 0;
        let failedPredictions = 0;
        
        for (let i = 0; i < vehicles.length; i++) {
            const vehicle = vehicles[i];
            // console.log(`🚗 Processing vehicle ${i + 1}/${vehicles.length}: ${vehicle.vehicle_name || 'Unknown Vehicle'}`);
            
            // Parse and validate base price
            const basePrice = parseFloat(vehicle.price) || 1000;
            if (basePrice <= 0) {
                // console.log(`⚠️ Invalid price for vehicle ${vehicle.id}, using default`);
                basePrice = 1000;
            }
            
            if (useAIModel) {
                // Try dynamic pricing with enhanced AI model
                try {
                    // Prepare vehicle data with better validation
                    const vehicleType = normalizeVehicleType(vehicle.Vechiletype || vehicle.type || 'car');
                    const modelYear = parseInt(vehicle.model) || parseInt(vehicle.modelYear) || 2020;
                    
                    // Validate model year
                    const validatedYear = Math.max(2000, Math.min(2025, modelYear));
                    
                    const vehicleData = {
                        temperature: temperature,
                        vehicleType: vehicleType,
                        modelYear: validatedYear,
                        basePrice: basePrice
                    };

                    console.log(`   📝 Vehicle data:`, {
                        name: vehicle.vehicle_name,
                        type: vehicleData.vehicleType,
                        year: vehicleData.modelYear,
                        basePrice: vehicleData.basePrice,
                        temp: vehicleData.temperature
                    });

                    // Get enhanced dynamic price adjustment
                    const priceAdjustment = await predictPrice(vehicleData);
                    const dynamicPrice = basePrice + (basePrice * priceAdjustment);
                    const priceChange = dynamicPrice - basePrice;
                    const priceChangePercent = ((priceChange / basePrice) * 100).toFixed(1);

                    // console.log(`   💰 Enhanced Price: ₹${basePrice} → ₹${Math.round(dynamicPrice)} (${priceChangePercent >= 0 ? '+' : ''}${priceChangePercent}%)`);

                    // Determine pricing reason
                    const pricingReason = getPricingReason(vehicleData, priceAdjustment);

                    enrichedData.push({
                        ...vehicle,
                        temperature,
                        basePrice,
                        dynamicPrice: Math.round(dynamicPrice),
                        priceAdjustment: Math.round(priceChange),
                        priceChangePercent: `${priceChange >= 0 ? '+' : ''}${priceChangePercent}%`,
                        pricingFactors: {
                            temperature: temperature,
                            vehicleType: vehicleData.vehicleType,
                            modelYear: vehicleData.modelYear,
                            climateImpact: Math.round(priceChange),
                            adjustmentFactor: priceAdjustment.toFixed(3),
                            pricingReason: pricingReason
                        },
                        aiPricing: true,
                        enhancedAI: true,
                        lastUpdated: new Date().toISOString()
                    });

                    successfulPredictions++;

                } catch (vehicleError) {
                    console.error(`❌ Enhanced AI pricing failed for vehicle ${vehicle.id || vehicle.vehicle_name}:`, vehicleError.message);
                    
                    // Fallback to base price for this specific vehicle
                    enrichedData.push({
                        ...vehicle,
                        basePrice,
                        dynamicPrice: basePrice, // Use base price as dynamic price
                        priceAdjustment: 0,       // No change
                        priceChangePercent: '0%', // No percentage change
                        pricingFactors: {
                            temperature: temperature,
                            error: 'AI prediction failed'
                        },
                        fallback: true,
                        aiPricing: false,
                        enhancedAI: false,
                        lastUpdated: new Date().toISOString()
                    });

                    failedPredictions++;
                }
            } else {
                // Use base price only (no AI model available)
                // console.log(`   💰 Using base price: ₹${basePrice} (Enhanced AI model not available)`);
                
                enrichedData.push({
                    ...vehicle,
                    basePrice,
                    dynamicPrice: basePrice, // Same as base price
                    priceAdjustment: 0,       // No adjustment
                    priceChangePercent: '0%', // No change
                    pricingFactors: {
                        temperature: temperature,
                        reason: 'AI model not available'
                    },
                    fallback: true,
                    aiPricing: false,
                    enhancedAI: false,
                    lastUpdated: new Date().toISOString()
                });
            }
        }

      
        return {
            data: enrichedData,
            // metadata: {
            //     totalVehicles: vehicles.length,
            //     aiPredictions: successfulPredictions,
            //     fallbackPrices: failedPredictions + (useAIModel ? 0 : vehicles.length),
            //     enhancedAIUsed: useAIModel,
            //     temperature: temperature,
            //     timestamp: new Date().toISOString(),
            //     version: 'enhanced-v2.0'
            // }
        };

    } catch (error) {
        console.error("❌ Major error in enhanced cardDataGetServices:", error);
        
        // Emergency fallback - return base prices only
        try {
            // console.log("🆘 Attempting emergency fallback with base prices only...");
            const vehicles = await CardDataModel.cardDataGetModel();
            const fallbackData = vehicles.map(vehicle => {
                const basePrice = parseFloat(vehicle.price) || 1000;
                return {
                    ...vehicle,
                    basePrice,
                    dynamicPrice: basePrice,  // Same as base price
                    priceAdjustment: 0,       // No change
                    priceChangePercent: '0%', // No percentage change
                    pricingFactors: {
                        reason: 'Emergency fallback'
                    },
                    fallback: true,
                    aiPricing: false,
                    enhancedAI: false,
                    emergencyFallback: true,
                    lastUpdated: new Date().toISOString()
                };
            });

            return {
                data: fallbackData,
                metadata: {
                    totalVehicles: vehicles.length,
                    aiPredictions: 0,
                    fallbackPrices: vehicles.length,
                    enhancedAIUsed: false,
                    emergencyMode: true,
                    timestamp: new Date().toISOString(),
                    version: 'emergency-fallback'
                }
            };
        } catch (fallbackError) {
            console.error("❌ Emergency fallback failed:", fallbackError);
            return { 
                error: "Complete service failure", 
                timestamp: new Date().toISOString() 
            };
        }
    }
};

// Helper function to normalize vehicle types
const normalizeVehicleType = (type) => {
    if (!type) return 'car';
    
    const lowerType = type.toLowerCase().trim();
    
    // Map various vehicle type variations to standard types
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

// Helper function to determine pricing reason
const getPricingReason = (vehicleData, adjustment) => {
    const reasons = [];
    
    if (vehicleData.temperature > 35) {
        reasons.push("hot weather premium");
    } else if (vehicleData.temperature < 5) {
        reasons.push("cold weather discount");
    }
    
    const vehicleAge = 2024 - vehicleData.modelYear;
    if (vehicleAge < 2) {
        reasons.push("new vehicle premium");
    } else if (vehicleAge > 10) {
        reasons.push("older vehicle adjustment");
    }
    
    if (vehicleData.vehicleType === 'luxury') {
        reasons.push("luxury vehicle factor");
    } else if (vehicleData.vehicleType === 'motorcycle' || vehicleData.vehicleType === 'bike') {
        reasons.push("weather sensitive vehicle");
    }
    
    if (adjustment > 0.2) {
        reasons.push("high demand conditions");
    } else if (adjustment < 0.05) {
        reasons.push("stable market conditions");
    }
    
    return reasons.length > 0 ? reasons.join(", ") : "standard market adjustment";
};



//Dynamic pricing logic funcitons

const getUserLocation = async () => {
  const res = await axios.get('http://ip-api.com/json/');
  const { lat, lon } = res.data;
  console.log(res.data)
  return { latitude: lat, longitude: lon };
};

const getCurrentTemperature = async (latitude, longitude) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`;
  const res = await axios.get(url);
  return res.data.current.temperature_2m;
};

const SearchCardDataServices=()=>{
     return new Promise((resolve, reject) => {
    
    
            try{
    
                CardDataModel.SearchCardDataGet()
                .then((results)=>{
                    resolve(results)
        
            })
            .catch((err)=>{
                        reject(err)
            })
            }
            catch(err){
    
            }
          
            
        })
}
module.exports={cardDataGetServices,cardDataGetServicesByID,LatestDateServices,SearchCardDataServices}