const RentalFormModel = require("../Model/RentalFormModel");








const RentalFormControllerFucntion = (req, res) => {
    return new Promise((resolve, reject) => {
        let body = "";

        req.on("data", (packetdata) => (body += packetdata));

        req.on("end", () => {
            if(body ==="") {
                reject(res.send("INVALID_JSON"));
               
            } else {
                let output = JSON.parse(body);

                RentalFormModel.toaddRentalForm(output.username,output.contactNumber,output.email,output.address,output.aadhaarNumber,output.shopName,output.streetAddress,output.city,output.state,output.country,output.pinCode,output.gstNumber)
                .then(() => {
                    console.log("Inserted")
                    resolve(res.send(ok));
                }).catch((err) => {
                   console.log(err)
                });

            
            }
        });
    });
};

module.exports = { RentalFormControllerFucntion };
