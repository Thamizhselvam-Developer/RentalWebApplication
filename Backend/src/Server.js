const express = require("express");
const db = require("./DataBaseConnection.js");
const routes = require("./Router/Router.js");
const exp = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const PORT = process.env.PORT || 5400;
const { createAndTrainModel, isReady } = require('./Middleware/Ai Data.js');

exp.use(express.json());
exp.use(cookieParser());
exp.use(cors({
    origin: ['http://localhost:5173','http://rentorent.com:5173','https://rentorent.com:5174','https://rentorent.com:5173'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS','PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie', 'Set-Cookie'],
    exposedHeaders: ['Set-Cookie'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
}));

// quick test route
exp.get('/test', (req, res) => {
  console.log("Test route hit");
  res.send("Test route working");
});

// Static files
exp.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));

// Routes
exp.use(routes.route);

let err = false;

db.connect = new Promise(async (resolve, reject) => {
    if (err) {
        reject("Your connection is rejected");
    } else {
        try {
            // Temporarily comment this out for testing
            await createAndTrainModel();
            console.log(`🤖 Skipping AI model training for testing`);

            exp.listen(PORT, "0.0.0.0", () => {
                console.log("LOCAL HOST LISTENING on IP 127.0.0.1");
            });

            resolve("✅ Connection is resolved");
        } catch (e) {
            reject(`❌ Failed to train model: ${e.message}`);
        }
    }
});

db.connect.then((msg) => {
    console.log("Success MSG = " + msg);
}).catch((err) => {
    console.log("Error = " + err);
});
