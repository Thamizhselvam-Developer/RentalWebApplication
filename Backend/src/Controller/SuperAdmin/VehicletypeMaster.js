const VehicleServices = require("../../Service/SuperAdmin/VehicleServices");
const {errorResponse} = require("../../Utilities/apiResponse")
const {succesResponse} = require ("../../Utilities/apiResponse")  
const VehicleControllerGet = async (req, res) => {
  try {
    const Data = await VehicleServices.VehicleServicesDataGet();
    res.send(Data);
  } catch (errr) {
    res.send("ERROR");
  }
};

const VehicleControllerUpdate = (req, res) => {
  try {
    let output = req.body;
    console.log(output, "Upadate");

    VehicleServices.VehicleServicesDataUpdate(output)
      .then((Data) => {
        console.log(Data, "CONTROLLER");

        res.send("Updated");
      })
      .catch((err) => {
        res.send("ERROR");
      });
  } catch (error) {
    console.log(error.message, "nooo");
  }
};

const vehicle = (req, res) => {
  return new Promise((resolve, reject) => {
    //     let body=""
    // req.on("data",(packet)=>(body+=packet));
    // req.on("end",()=>{
    try {
      let output = req.body;
      console.log(output);
      VehicleServices.VehicleServicesData(output);
      resolve(res.send("Added"));
    } catch (error) {
      console.log(error.message + "nooo");
      reject();
    }
  });

  // })
};

const deleteVehicleTypeData= async(req,res)=>{
    try{
    const id = req.params.id
    const adminId = req.params.adminId
         const Data = await VehicleServices.patchVehicleServices(id,adminId)
         if(Data){
             return res
      .status(200)
      .json(
        succesResponse('Deleted', {
          msg: 'Vehicle Type Deleted Sucessfully',
        })
      );
    }
    }
    catch(err){
         return res
      .status(500)
      .json(
        errorResponse('Error VehicleType Data Delete',err)
      );
        
    }
    
            
}
module.exports = { vehicle, VehicleControllerGet, VehicleControllerUpdate ,deleteVehicleTypeData};
