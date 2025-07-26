const RentalFormServices = require("../../Service/ShopAdmin/RentalFormServices");
const { succesResponse, errorResponse } = require("../../Utilities/apiResponse");
const RentalFormControllerGet = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const Data = await RentalFormServices.RentalFormServicesGet(id);

    res.send(Data);
  } catch (err) {
    res.send("Not Valid");
  }
};
const ShopImageController= async(req,res)=>{
const id  = req.params.id
console.log(id)
    const Data = await RentalFormServices.RentalShopImages(id);
    console.log(Data)
    res.send(Data)
}

const RentalFormControllerFunction = async (req, res) => {
  let body = "";
  // req.on("data", (packetdata) => (body += packetdata));
  // console.log(body)
  // req.on("end", async () => {
 
  try {
let files = req.files
    let output = req.body;
       const  Data=   await RentalFormServices.RentalFormServicesData(output,files)
        res.status(201).json(succesResponse("Form Submitted Succesfully",{msg:"Form Submitted Succesfully"}))
                 } 
  catch (err) {
    return res.status(500).json(errorResponse("Error on Add Rental Form Data",err ))
  }



  // });
};

module.exports = { RentalFormControllerFunction, RentalFormControllerGet ,ShopImageController};
