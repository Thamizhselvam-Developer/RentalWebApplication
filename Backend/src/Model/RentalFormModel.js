const dataconnect = require("../DataBaseConnection");

const toaddRentalForm = (username,contactNumber,email,address,aadhaarNumber,shopName,streetAddress,city,state,country,pinCode,gstNumber) => {
    return new Promise((resolve, reject) => {

        const query = `INSERT INTO rentalform (username,contactNumber,email,address,aadhaarNumber,shopName,streetAddress,city,state,country,pinCode,gstNumber) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      

        dataconnect.query(query, [username,contactNumber,email,address,aadhaarNumber,shopName,streetAddress,city,state,country,pinCode,gstNumber], (error) => {
            if (error) {

                return reject("Database error: " + error);
            }

            resolve("  Data inserted.");
        });
    });
};

module.exports = { toaddRentalForm };
