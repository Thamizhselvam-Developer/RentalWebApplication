const tf = require('@tensorflow/tfjs-node');

// Map vehicle types to numeric codes with better categorization
const VEHICLE_TYPES = {
    'car': 0,
    'bike': 1, 
    'van': 2,
    'luxury': 3,
    'mini_van': 4,
    'suv': 5,
    'motorcycle': 6,
    'sedan': 0,      // Same as car
    'hatchback': 0,  // Same as car
    'coupe': 3,      // Luxury category
    'truck': 2       // Same as van
};

let model = null;
let isModelReady = false;

const normalizeInput = (data) => {
    // Normalize model year (2000-2025 range)
    const yearNorm = Math.max(0, Math.min(1, (data.modelYear - 2000) / 25));
    
    // Normalize vehicle type (0-6 range)
    const vehicleTypeCode = VEHICLE_TYPES[data.vehicleType.toLowerCase()] || 0;
    const vehicleTypeNorm = vehicleTypeCode / 6;
    
    // Normalize temperature (0-50°C range for broader coverage)
    const temperatureNorm = Math.max(0, Math.min(1, (data.temperature + 10) / 60));
    
    // Normalize base price (0-50000 range)
    const basePriceNorm = Math.max(0, Math.min(1, data.basePrice / 50000));
    
    return [yearNorm, vehicleTypeNorm, temperatureNorm, basePriceNorm];
};

const createAndTrainModel = async () => {
    try {
        console.log("🚀 Creating enhanced pricing model...");
        
        // More comprehensive training data
        // Format: [modelYear, vehicleType, temperature, basePrice] -> priceAdjustment
        const trainingScenarios = [
            // Cars - temperature effects
            { year: 2024, type: 0, temp: 35, price: 3000, adjustment: 0.15 },  // Hot weather, newer car
            { year: 2024, type: 0, temp: 25, price: 3000, adjustment: 0.10 },  // Normal weather
            { year: 2024, type: 0, temp: 5, price: 3000, adjustment: 0.05 },   // Cold weather
            { year: 2020, type: 0, temp: 35, price: 2500, adjustment: 0.12 },  // Hot weather, older car
            { year: 2015, type: 0, temp: 25, price: 2000, adjustment: 0.08 },  // Normal weather, older
            { year: 2010, type: 0, temp: 5, price: 1500, adjustment: 0.03 },   // Cold, much older
            
            // Luxury vehicles - higher adjustments
            { year: 2024, type: 3, temp: 35, price: 8000, adjustment: 0.25 },  // Luxury hot weather
            { year: 2024, type: 3, temp: 25, price: 8000, adjustment: 0.20 },  // Luxury normal
            { year: 2020, type: 3, temp: 35, price: 6000, adjustment: 0.22 },  // Luxury hot, older
            { year: 2015, type: 3, temp: 15, price: 4000, adjustment: 0.15 },  // Luxury cool, older
            
            // SUVs - moderate adjustments
            { year: 2024, type: 5, temp: 40, price: 5000, adjustment: 0.18 },  // SUV very hot
            { year: 2024, type: 5, temp: 25, price: 5000, adjustment: 0.12 },  // SUV normal
            { year: 2020, type: 5, temp: 10, price: 4000, adjustment: 0.08 },  // SUV cool, older
            { year: 2015, type: 5, temp: 30, price: 3000, adjustment: 0.10 },  // SUV warm, older
            
            // Motorcycles - weather sensitive
            { year: 2024, type: 6, temp: 30, price: 2000, adjustment: 0.20 },  // Motorcycle warm
            { year: 2024, type: 6, temp: 15, price: 2000, adjustment: 0.10 },  // Motorcycle cool
            { year: 2020, type: 6, temp: 35, price: 1500, adjustment: 0.15 },  // Motorcycle hot, older
            { year: 2015, type: 6, temp: 5, price: 1000, adjustment: 0.02 },   // Motorcycle cold, older
            
            // Bikes - very weather sensitive
            { year: 2024, type: 1, temp: 30, price: 800, adjustment: 0.25 },   // Bike warm
            { year: 2024, type: 1, temp: 15, price: 800, adjustment: 0.15 },   // Bike cool
            { year: 2020, type: 1, temp: 35, price: 600, adjustment: 0.18 },   // Bike hot, older
            { year: 2015, type: 1, temp: 0, price: 400, adjustment: 0.05 },    // Bike very cold
            
            // Vans - utility focused
            { year: 2024, type: 2, temp: 35, price: 4000, adjustment: 0.14 },  // Van hot
            { year: 2024, type: 2, temp: 20, price: 4000, adjustment: 0.10 },  // Van normal
            { year: 2020, type: 2, temp: 25, price: 3000, adjustment: 0.09 },  // Van older
            { year: 2015, type: 2, temp: 15, price: 2500, adjustment: 0.07 },  // Van much older
            
            // Mini vans - family oriented
            { year: 2024, type: 4, temp: 30, price: 3500, adjustment: 0.13 },  // Mini van warm
            { year: 2024, type: 4, temp: 20, price: 3500, adjustment: 0.09 },  // Mini van normal
            { year: 2020, type: 4, temp: 25, price: 2800, adjustment: 0.08 },  // Mini van older
            { year: 2015, type: 4, temp: 10, price: 2200, adjustment: 0.06 },  // Mini van cold, older
        ];
        
        // Convert to normalized inputs and outputs
        const normalizedInputs = [];
        const priceAdjustments = [];
        
        trainingScenarios.forEach(scenario => {
            const inputData = {
                modelYear: scenario.year,
                vehicleType: scenario.type.toString(),
                temperature: scenario.temp,
                basePrice: scenario.price
            };
            
            const normalizedInput = normalizeInput(inputData);
            normalizedInputs.push(normalizedInput);
            priceAdjustments.push([scenario.adjustment]);
        });
        
        // console.log(`📊 Training with ${normalizedInputs.length} scenarios`);
        
        // Create tensors
        const inputTensor = tf.tensor2d(normalizedInputs);
        const outputTensor = tf.tensor2d(priceAdjustments);
        
        // Create model with better architecture
        model = tf.sequential();
        model.add(tf.layers.dense({ 
            units: 32, 
            inputShape: [4], 
            activation: 'relu',
            kernelInitializer: 'glorotUniform'
        }));
        model.add(tf.layers.dropout({ rate: 0.2 }));
        model.add(tf.layers.dense({ 
            units: 16, 
            activation: 'relu' 
        }));
        model.add(tf.layers.dropout({ rate: 0.1 }));
        model.add(tf.layers.dense({ 
            units: 8, 
            activation: 'relu' 
        }));
        model.add(tf.layers.dense({ 
            units: 1, 
            activation: 'sigmoid' // Ensures output between 0-1
        }));
        
        // Compile with better optimizer settings
        model.compile({ 
            optimizer: tf.train.adam(0.005), // Lower learning rate
            loss: 'meanSquaredError',
            metrics: ['mse']
        });
        
        // console.log("🚀 Training enhanced model...");
        
        // Train the model
        const history = await model.fit(inputTensor, outputTensor, {
            epochs: 500,
            batchSize: 8,
            validationSplit: 0.2,
            shuffle: true,
            verbose: 0,
            callbacks: {
                onEpochEnd: (epoch, logs) => {
                    if (epoch % 100 === 0) {
                        console.log(`Epoch ${epoch}: Loss=${logs.loss.toFixed(6)}, Val Loss=${logs.val_loss?.toFixed(6) || 'N/A'}`);
                    }
                }
            }
        });
        
        // Clean up tensors
        inputTensor.dispose();
        outputTensor.dispose();
        
        isModelReady = true;
        // console.log("✅ Enhanced model training complete!");
        
        // Test the model with sample data
        await testModel();
        
    } catch (err) {
        console.error("❌ Error during enhanced training:", err);
        isModelReady = false;
    }
};

const testModel = async () => {
    // console.log("🧪 Testing model with sample predictions...");
    
    const testCases = [
        { modelYear: 2024, vehicleType: 'luxury', temperature: 35, basePrice: 8000 },
        { modelYear: 2020, vehicleType: 'car', temperature: 25, basePrice: 3000 },
        { modelYear: 2015, vehicleType: 'motorcycle', temperature: 5, basePrice: 1200 },
    ];
    
    for (const testCase of testCases) {
        try {
            const adjustment = await predictPrice(testCase);
            const adjustedPrice = testCase.basePrice * (1 + adjustment);
            console.log(`🧪 ${testCase.vehicleType} (${testCase.modelYear}, ${testCase.temperature}°C): ${testCase.basePrice} → ${adjustedPrice.toFixed(0)} (+${(adjustment * 100).toFixed(1)}%)`);
        } catch (error) {
            console.error(`❌ Test failed for case:`, testCase, error);
        }
    }
};

const predictPrice = async (inputData) => {
    if (!isModelReady || !model) {
        throw new Error("Enhanced model not ready!");
    }
    
    try {
        const inputArray = normalizeInput(inputData);
        const inputTensor = tf.tensor2d([inputArray]);
        const prediction = model.predict(inputTensor);
        const output = await prediction.array();
        
        // Clean up tensors
        inputTensor.dispose();
        prediction.dispose();
        
        // Return the price adjustment (0 to 1, representing 0% to 100% increase)
        let adjustment = output[0][0];
        
        // Apply some business logic based on vehicle type and conditions
        adjustment = applyBusinessLogic(inputData, adjustment);
        
        return Math.max(0, Math.min(0.5, adjustment)); // Cap at 50% increase
        
    } catch (error) {
        console.error("❌ Prediction error:", error);
        throw error;
    }
};

const applyBusinessLogic = (inputData, baseAdjustment) => {
    let adjustment = baseAdjustment;
    
    // Temperature-based adjustments
    if (inputData.temperature > 35) {
        adjustment *= 1.2; // 20% boost for very hot weather
    } else if (inputData.temperature < 5) {
        adjustment *= 0.7; // 30% reduction for very cold weather
    }
    
    // Vehicle age adjustments
    const vehicleAge = 2024 - inputData.modelYear;
    if (vehicleAge > 10) {
        adjustment *= 0.8; // Older vehicles have less price volatility
    } else if (vehicleAge < 2) {
        adjustment *= 1.1; // Newer vehicles have higher demand
    }
    
    // Vehicle type specific adjustments
    const vehicleType = inputData.vehicleType.toLowerCase();
    if (vehicleType.includes('luxury')) {
        adjustment *= 1.3; // Luxury vehicles more sensitive to conditions
    } else if (vehicleType.includes('bike') || vehicleType.includes('motorcycle')) {
        adjustment *= 1.4; // Two-wheelers very weather sensitive
    }
    
    return adjustment;
};

const isReady = () => isModelReady;
const getModel = () => model;

// Add waitForModel function
const waitForModel = async (timeout = 30000) => {
    return new Promise((resolve) => {
        const startTime = Date.now();
        
        const checkModel = () => {
            if (isModelReady) {
                resolve(true);
            } else if (Date.now() - startTime > timeout) {
                resolve(false);
            } else {
                setTimeout(checkModel, 100);
            }
        };
        
        checkModel();
    });
};

module.exports = { 
    createAndTrainModel, 
    predictPrice, 
    isReady, 
    getModel,
    waitForModel
};