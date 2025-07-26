const express = require("express");
const dotEnv = require("dotenv");

const AiServices = require("../Service/Ai/AiServices");
const upload = require("../Middleware/uploadMiddleware");
const RegistrationController = require("../Controller/RegistrationController");
const LoginController = require("../Controller/LoginController");
const LoginServices = require("../Service/Login_Authication");
const Login_Authication = require("../Service/Login_Authication");
const VechiletypeMaster = require("../Controller/SuperAdmin/VehicletypeMaster");
const BrandtypeMaster = require("../Controller/SuperAdmin/BrandtypeMaster");
const FueltypeMaster = require("../Controller/SuperAdmin/FueltypeMaster");
const TransmissiontypeMaster = require("../Controller/SuperAdmin/TransmissiontypeMaster");
const RentalFormController = require("../Controller/ShopAdmin/RentalFormController");
const axios = require("axios");
const CardDataController = require("../Controller/UserAdmin/CardDataController");
//Admin
const AdminRoleController = require("../Controller/SuperAdmin/AdminRoleController");
const bookingController = require("../Controller/bookingController");
const SuperLoginController = require("../Controller/SuperAdmin/SuperLoginController");
const ShopAdminLoginContoller = require("../Controller/ShopAdmin/ShopAdminLoginController");
//shop-admin
const FormStatus = require("../Controller/SuperAdmin/FormStatus");

const AddVehicle = require("../Controller/ShopAdmin/AddVehicle");
const route = express.Router();
route.post("/superloginData", SuperLoginController.SuperLoginControllerData);
route.post("/superlogin", SuperLoginController.SuperLogin);
route.get("/superloginGet/:id", SuperLoginController.SuperLoginGet);

route.post("/ShoploginData", ShopAdminLoginContoller.ShopAdminLogin);
route.get("/shoploginGet/:id", ShopAdminLoginContoller.shoploginGet);

route.post("/status/:bit/:id", FormStatus.formStatus);

route.post(
  "/user",
  upload.single("File"),
  RegistrationController.RegistraionControllerFucntion
);
route.get(
  "/userImage/:id",
  RegistrationController.RegistraionControllerProfile
);

route.get("/userGet/:id", RegistrationController.RegistraionControllerGet);

route.post("/login", LoginController.Login);
// route.post("/login",(req,res)=>{
//   console.log(req.body)
// })

route.get("/CardData", CardDataController.cardDataGetControl);
route.get("/BookingDetails/:id", CardDataController.cardDataGetControlById);
route.get("/api/latestvehicle", CardDataController.LatestDateController);

route.post("/vehicletypesUpdate", VechiletypeMaster.VehicleControllerUpdate);
route.post("/vehicletypes", VechiletypeMaster.vehicle);
route.get("/api/VehicleTypes", VechiletypeMaster.VehicleControllerGet);
route.post("/brandtypes", BrandtypeMaster.brand);
route.get("/api/BrandTypes", BrandtypeMaster.BrandControllerGet);
route.post("/Brandupdate", BrandtypeMaster.BrandControllerUpdate);

route.post("/fueltypes", FueltypeMaster.fuel);
route.get("/api/FuelTypes", FueltypeMaster.FuelControllerGet);
route.post("/FuelUpdate", FueltypeMaster.FuelControllerUpdate);

route.post("/transmittypes", TransmissiontypeMaster.transmission);
route.get(
  "/api/TransmissionTypes",
  TransmissiontypeMaster.TransmissionControllerGet
);
route.post(
  "/TransmissionUpdate",
  TransmissiontypeMaster.TransmissionControllerUpdate
);
route.post("/send-confirmation", bookingController.sendBookingConfirmation);
route.get("/ShopImage/:id",RentalFormController.ShopImageController)

route.post("/rentalform",upload.fields([
  { name: "OwnerImage", maxCount: 1 },
  { name: "image", maxCount: 1 },
  { name: "ShopImage", maxCount: 5 }, ]),RentalFormController.RentalFormControllerFunction);
route.get("/OwnwerInfo/:id", RentalFormController.RentalFormControllerGet);

route.get("/AreaData", CardDataController.SearchCardDataController);
route.post(
  "/Addvehicle",
  upload.fields([
    { name: "FrontImage", maxCount: 1 },
    { name: "image", maxCount: 5 },
  ]),
  AddVehicle.AddVehicleData
);

route.patch(
  "/AddvehicleUpdate",
  upload.fields([
    { name: "FrontImage", maxCount: 1 },
    { name: "AdditionalImages", maxCount: 5 },
  ]),
  AddVehicle.AddVehicleDataUpdate
)


route.get("/AddvehicleGet/:id", AddVehicle.AddvehicleGet);

route.get("/AddvehicleGetImages/:id", AddVehicle.AddVehicleGetImages);

route.get("/AddVehicleGetByID/:id", AddVehicle.AddVehicleGetByID);

route.post("/baserole", AdminRoleController.baseControl);
route.get("/api/BaseRole", AdminRoleController.baseControllerGet);
route.post("/UpdateData", AdminRoleController.baseControllerUpdate);
route.get("/Events", (req, res) => {
  const { getJson } = require("serpapi");
  const axios = require("axios");

  const apiKey =
    "00702f7c94921f2d1c7a36ffab123943c1594d722e5ae2d21095e00ac3207668";
  const baseUrl = "https://serpapi.com/search.json";

  // Helper to turn getJson into a Promise
  function getEvents(params) {
    return new Promise((resolve, reject) => {
      getJson(params, (json) => {
        if (json) resolve(json);
        else reject("No JSON returned");
      });
    });
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Define and immediately call the async handler
  (async function handler(req, res) {
    try {
      const json = await getEvents({
        engine: "google_events",
        q: "Events in Puducherry",
        hl: "en",
        gl: "us",
        api_key: apiKey,
      });

      const events = json["events_results"];
      const titles = events.map((item) => item.title);
      const dates = events.map((item) => item.date);
      const links = events.map((item) => item.link);

      const images = [];

      for (const title of titles) {
        try {
          const response = await axios.get(baseUrl, {
            params: {
              engine: "google_images",
              q: title,
              api_key: apiKey,
            },
          });

          const data = response.data;
          if (data.images_results && data.images_results.length > 0) {
            const imgUrl = data.images_results[0].original;
            images.push(imgUrl);
          } else {
            console.log(`No image found for "${title}"`);
            images.push(null);
          }

          await sleep(3000); // wait to respect rate limits
        } catch (err) {
          console.error(`Error fetching image for "${title}":`, err.message);
          images.push(null);
        }
      }

      res.send({
        title: titles,
        date: dates,
        link: links,
        images: images,
      });
    } catch (error) {
      console.error("Error fetching events or images:", error);
      res.status(500).send("Internal Server Error");
    }
  })(req, res); // <- Call the async function immediately
});

route.patch("/admin/remove/:id/:adminId",AdminRoleController.deleteAdminRoleData)
route.patch("/transmissionItems/remove/:id/:adminId",TransmissiontypeMaster.deleteTransmissiontypeData)
route.patch("/fuelItems/remove/:id/:adminId",FueltypeMaster.deleteFueltypeData)
route.patch("/branditem/remove/:id/:adminId",BrandtypeMaster.deleteBrandData)
route.patch("/vehicleItem/:id/:adminId",VechiletypeMaster.deleteVehicleTypeData)


route.get("/", (req, res) => {
  res.send("HI GUYS ITS CONNECTED ");
});

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Database schema for context
const schema = `
CREATE TABLE Area_tbl (
    id INT AUTO_INCREMENT,
    Area_name VARCHAR(255) NOT NULL,
    isDeleted BIT(1) DEFAULT b'0',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    createdBy CHAR(10),
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    updatedBy CHAR(10),
    deletedAt TIMESTAMP,
    deletedBy CHAR(10),
    PRIMARY KEY (id)
);

CREATE TABLE add_on_item (
    id INT AUTO_INCREMENT,
    items_name VARCHAR(255),
    items_prize DOUBLE(6,2),
    isDeleted BIT(1) DEFAULT b'0',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    createdBy CHAR(10),
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    updatedBy CHAR(10),
    deletedAt TIMESTAMP,
    deletedBy CHAR(10),
    PRIMARY KEY (id)
);

CREATE TABLE adminrole_tbl (
    id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    isDeleted BIT(1) DEFAULT b'0',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    createdBy CHAR(10),
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    updatedBy CHAR(10),
    deletedAt TIMESTAMP,
    deletedBy CHAR(10),
    PRIMARY KEY (id),
    UNIQUE KEY name (name)
);

CREATE TABLE booking_details (
    id CHAR(10) NOT NULL,
    pickup DATETIME NOT NULL,
    dropping DATETIME NOT NULL,
    pickup_location VARCHAR(255) NOT NULL,
    total_price DOUBLE(6,2),
    advance_payment DOUBLE(6,2),
    user_id CHAR(10) NOT NULL,
    rental_shop_id CHAR(10) NOT NULL,
    vehicle_id CHAR(10) NOT NULL,
    add_ons INT DEFAULT NULL,
    rental_duration_id INT DEFAULT NULL,
    isDeleted BIT(1) DEFAULT b'0',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    createdBy CHAR(10),
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    updatedBy CHAR(10),
    deletedAt TIMESTAMP,
    deletedBy CHAR(10),
    drop_location VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (rental_duration_id) REFERENCES rental_duration_tbl (id),
    FOREIGN KEY (add_ons) REFERENCES add_on_item (id),
    FOREIGN KEY (vehicle_id) REFERENCES vehicle_tbl (id),
    FOREIGN KEY (rental_shop_id) REFERENCES rental_shop_tbl (id),
    FOREIGN KEY (user_id) REFERENCES user (id)
);

CREATE TABLE brand_tbl (
    id INT AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    createdBy CHAR(10),
    isDeleted BIT(1) DEFAULT b'0',
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    updatedBy CHAR(10),
    deletedAt TIMESTAMP,
    deletedBy CHAR(10),
    PRIMARY KEY (id),
    UNIQUE KEY name (name)
);

CREATE TABLE categories_tbl (
    id INT AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    isDeleted BIT(1) DEFAULT b'0',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    createdBy CHAR(10),
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    updatedBy CHAR(10),
    deletedAt TIMESTAMP,
    deletedBy CHAR(10),
    PRIMARY KEY (id),
    UNIQUE KEY name (name)
);

CREATE TABLE fuel_type_tbl (
    id INT AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    createdBy CHAR(10),
    isDeleted BIT(1) DEFAULT b'0',
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    updatedBy CHAR(10),
    deletedAt TIMESTAMP,
    deletedBy CHAR(10),
    PRIMARY KEY (id),
    UNIQUE KEY name (name)
);

CREATE TABLE rental_duration_tbl (
    id INT AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    createdBy CHAR(10),
    isDeleted BIT(1) DEFAULT b'0',
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    updatedBy CHAR(10),
    deletedAt TIMESTAMP,
    deletedBy CHAR(10),
    PRIMARY KEY (id),
    UNIQUE KEY name (name)
);

CREATE TABLE rental_shop_tbl (
    id CHAR(10) NOT NULL,
    name VARCHAR(100) NOT NULL,
    address TEXT NOT NULL,
    gst_no CHAR(15) DEFAULT NULL,
    pincode CHAR(6) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    isApproved BIT(1) DEFAULT b'0',
    rentalImage_id INT NOT NULL,
    isDeleted BIT(1) DEFAULT b'0',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    createdBy CHAR(10),
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    updatedBy CHAR(10),
    deletedAt TIMESTAMP,
    deletedBy CHAR(10),
    rental_License_img_id INT DEFAULT NULL,
    Area_id INT DEFAULT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY name (name)
);

CREATE TABLE return_status (
    id CHAR(10) NOT NULL,
    image_path VARCHAR(255) DEFAULT NULL,
    return_time DATETIME NOT NULL,
    description TEXT,
    isDeleted BIT(1) DEFAULT b'0',
    extra_charges DOUBLE(6,2) DEFAULT NULL,
    booking_id CHAR(10) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    createdBy CHAR(10),
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    updatedBy CHAR(10),
    deletedAt TIMESTAMP,
    deletedBy CHAR(10),
    PRIMARY KEY (id),
    FOREIGN KEY (booking_id) REFERENCES booking_details (id)
);

CREATE TABLE shop_owner_tbl (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    phoneNumber VARCHAR(13) NOT NULL,
    email VARCHAR(255) NOT NULL,
    rentalShop_id CHAR(10) DEFAULT NULL,
    address TEXT NOT NULL,
    password CHAR(60) DEFAULT NULL,
    proofName VARCHAR(100) NOT NULL,
    proofPath VARCHAR(255) NOT NULL,
    isDeleted BIT(1) DEFAULT b'0',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    aadhaarNumber CHAR(12) NOT NULL,
    createdBy CHAR(10),
    updatedBy CHAR(10),
    deletedAt TIMESTAMP,
    deletedBy CHAR(10),
    PRIMARY KEY (id),
    UNIQUE KEY name (name),
    UNIQUE KEY phoneNumber (phoneNumber),
    UNIQUE KEY email (email),
    FOREIGN KEY (rentalShop_id) REFERENCES rental_shop_tbl (id)
);

CREATE TABLE transmission_tbl (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    createdBy CHAR(10),
    isDeleted BIT(1) DEFAULT b'0',
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedBy CHAR(10),
    deletedAt TIMESTAMP,
    deletedBy CHAR(10),
    PRIMARY KEY (id),
    UNIQUE KEY name (name)
);

CREATE TABLE user (
    id CHAR(10) NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) DEFAULT NULL,
    phoneNo VARCHAR(13) NOT NULL,
    password CHAR(60) NOT NULL,
    Address TEXT NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    id_proof_name VARCHAR(255) NOT NULL,
    id_proof_path VARCHAR(255) NOT NULL,
    isDeleted BIT(1) DEFAULT b'0',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    createdBy CHAR(10),
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    pincode CHAR(6) NOT NULL,
    updatedBy CHAR(10),
    deletedAt TIMESTAMP,
    deletedBy CHAR(10),
    PRIMARY KEY (id),
    UNIQUE KEY phoneNo (phoneNo),
    UNIQUE KEY email (email)
);

CREATE TABLE vehicle_tbl (
    id CHAR(10) NOT NULL,
    name VARCHAR(255) NOT NULL,
    model VARCHAR(100) DEFAULT NULL,
    color VARCHAR(50) DEFAULT NULL,
    registration_no VARCHAR(50) NOT NULL,
    status VARCHAR(50) DEFAULT NULL,
    category_id INT DEFAULT NULL,
    rentalShop_id CHAR(10) DEFAULT NULL,
    isDeleted BIT(1) DEFAULT b'0',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    createdBy CHAR(10),
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    updatedBy CHAR(10),
    deletedBy CHAR(10),
    deletedAt TIMESTAMP,
    brand_id INT DEFAULT NULL,
    fuel_id INT DEFAULT NULL,
    transmission_id INT DEFAULT NULL,
    price DECIMAL(10,2) NOT NULL,
    seats CHAR(17) NOT NULL,
    Vehicle_img_path VARCHAR(255) DEFAULT NULL,
    Vehicle_img_name VARCHAR(255) DEFAULT NULL,
    Description VARCHAR(255) DEFAULT NULL,
    Area_id INT DEFAULT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY registration_no (registration_no),
    FOREIGN KEY (category_id) REFERENCES categories_tbl (id),
    FOREIGN KEY (rentalShop_id) REFERENCES rental_shop_tbl (id),
    FOREIGN KEY (brand_id) REFERENCES brand_tbl (id),
    FOREIGN KEY (fuel_id) REFERENCES fuel_type_tbl (id),
    FOREIGN KEY (transmission_id) REFERENCES transmission_tbl (id),
    FOREIGN KEY (Area_id) REFERENCES Area_tbl (id)
);

CREATE TABLE wishlist (
    id INT NOT NULL AUTO_INCREMENT,
    vehicle_id CHAR(10) NOT NULL,
    isDeleted BIT(1) DEFAULT b'0',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    createdBy CHAR(10),
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    updatedBy CHAR(10),
    deletedAt TIMESTAMP,
    deletedBy CHAR(10),
    PRIMARY KEY (id),
    FOREIGN KEY (vehicle_id) REFERENCES vehicle_tbl (id)
);
`;

route.post("/text-to-sql", async (req, res) => {
  console.log(req.body, "333333333333333333333333333333333333");
  const userQuery = req.body.query;

  if (!userQuery) {
    return res.status(400).json({
      success: false,
      error: "Query is required",
    });
  }

  try {
    // Enhanced prompt with schema context and instructions
    const enhancedPrompt = `
You are a SQL expert. Given the following database schema for a vehicle rental system, convert the natural language query to accurate SQL.

DATABASE SCHEMA:
${schema}

CONSTRAINTS:
- Do not include markdown formatting like \`\`\`sql or \`\`\`.
- Only use the given schema and valid table/column names.
- Do not infer or add extra conditions that are not explicitly stated.
- Only extract relevant vehicle information such as vehicle type (from categories_tbl), brand, fuel type,transmission,Vehicle_img_name, seats, vechle id also need and price.
- Return only the final SQL query without any explanation or commentary.
- Ensure the SQL is syntactically correct and executable.
- Do not prefix the SQL with 'sql' or any labels.
- Do not use escape sequences like \\n. Return plain SQL text in a single line.

NATURAL LANGUAGE QUERY: ${userQuery}

Generate the SQL query:`;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: enhancedPrompt,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.1, // Lower temperature for more consistent SQL generation
          topK: 1,
          topP: 1,
          maxOutputTokens: 2048,
        },
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    const sqlText =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No result";

    // Clean up the SQL response (remove markdown formatting if present)
    const cleanedSQL = sqlText
      .replace(/^sql\s*/i, "") // remove 'sql' at the start (case-insensitive)
      .replace(/\\n/g, " ") // remove all \n (escaped newlines)
      .replace(/\s+/g, " ") // collapse multiple spaces
      .replace(/```/g, "") // remove any remaining markdown
      .trim();

    const Data = await AiServices.AiServices(cleanedSQL);
    // res.json({
    //     success: true,
    //     sql: cleanedSQL,
    //     originalQuery: userQuery
    // });
    res.send(Data);
  } catch (err) {
    console.error("Gemini API error:", err.response?.data || err.message);
    res.status(500).json({
      success: false,
      error: "Failed to generate SQL query",
      details: err.message,
    });
  }
});

module.exports = { route };
