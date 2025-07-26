const FuelServices = require("../../Service/SuperAdmin/FuelServices");
const {errorResponse} = require("../../Utilities/apiResponse")
const {succesResponse} = require ("../../Utilities/apiResponse")   
const FuelControllerUpdate = (req, res) => {
  return new Promise((resolve, reject) => {
    let body = "";

    try {
      let output = req.body;
      FuelServices.FuelServicesUpdate(output);
      resolve(res.send("Fuel Added"));
    } catch (error) {
      console.log(error.message + "no");
      reject();
    }
  });
};

const FuelControllerGet = async (req, res) => {
  try {
    await FuelServices.FuelServicesDataGet()
      .then((results) => {
        res.send(results);
      })
      .catch((error) => {
        res.send("error");
      });
  } catch (error) {}
};

const fuel = (req, res) => {
  return new Promise((resolve, reject) => {
    try {
      let output = req.body;
      console.log(output, "FUEL");
      FuelServices.FuelServicesData(output);
      resolve(res.send("Fuel Added"));
    } catch (error) {
      console.log(error.message + "no");
      reject();
    }
  });
};

const deleteFueltypeData=async(req,res)=>{
     try{
            const id = req.params.id
            const adminId=  req.params.adminId
            const Data = await FuelServices.pathFuelDataServices(id,adminId)
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
module.exports = { fuel, FuelControllerGet, FuelControllerUpdate ,deleteFueltypeData };
