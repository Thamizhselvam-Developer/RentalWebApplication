const TransmissionServices = require("../../Service/SuperAdmin/TransmissionServices");
const {errorResponse} = require("../../Utilities/apiResponse")
const {succesResponse} = require ("../../Utilities/apiResponse")    
const TransmissionControllerGet = async (req, res) => {
  try {
    await TransmissionServices.TransmissionServicesDataGet()
      .then((results) => {
        res.send(results);
      })
      .catch((err) => {
        res.send("Not Valid");
      });
  } catch (err) {}
};

const TransmissionControllerUpdate = (req, res) => {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (packet) => (body += packet));
    req.on("end", () => {
      try {
        let output = JSON.parse(body);
        console.log(output);
        TransmissionServices.TransmissionServicesUpdate(output);
        resolve(res.send("Transmission Added"));
      } catch (error) {
        console.log(error.message + "no");
        reject();
      }
    });
  });
};

const transmission = (req, res) => {
    console.log(req.body)
 
      try {
        let output = req.body;
        console.log(output);
        TransmissionServices.TransmissionServicesData(output);
     res.send("Transmission Added")
      } catch (error) {
        console.log(error.message + "no");
      }
   
};

const deleteTransmissiontypeData=async(req,res)=>{
     try{
            const id = req.params.id
            const adminId=  req.params.adminId
            const Data = await TransmissionServices.pathTransmissionDataServices(id,adminId)
              if(Data){
                 return res
          .status(200)
          .json(
            succesResponse('Deleted', {
              msg: 'Fuel Data Deleted Sucessfully',
            })
        )
        }
    }
        catch(error){
            
                return res
          .status(500)
          .json(
            errorResponse('Error Fuel Data Delete',error)
          );
        }
}
module.exports = {
  transmission,
  TransmissionControllerGet,
  TransmissionControllerUpdate,
  deleteTransmissiontypeData
};
