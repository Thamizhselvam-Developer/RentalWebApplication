const BrandServices = require("../../Service/SuperAdmin/BrandServices");
const {errorResponse} = require("../../Utilities/apiResponse")
const {succesResponse} = require ("../../Utilities/apiResponse")  
const BrandControllerUpdate = async (req, res) => {
  return new Promise((resolve, reject) => {
    try {
      let output = req.body;
      console.log(output);
      BrandServices.BrandServicesUpdate(output);
      resolve(res.send("Brand Added"));
    } catch (error) {
      console.log(error.message + "no");
      reject();
    }
  });
};

const BrandControllerGet = async (req, res) => {
  try {
    await BrandServices.BrandServicesDataGet()
      .then((ress) => {
        res.send(ress);
      })
      .catch((err) => {
        res.send("Not Valid");
      });
  } catch (err) {}
};

const brand = (req, res) => {
  return new Promise((resolve, reject) => {
    try {
      let output = req.body;
      console.log(output);
      BrandServices.BrandServicesData(output);
      resolve(res.send("Brand Added"));
    } catch (error) {
      console.log(error.message + "no");
      reject();
    }
  });
};

const deleteBrandData= async(req,res)=>{
    try{
        const id = req.params.id
        const adminId=  req.params.adminId
        const Data = await BrandServices.pathBrandDataServices(id,adminId)
          if(Data){
             return res
      .status(200)
      .json(
        succesResponse('Deleted', {
          msg: 'Brand Data Deleted Sucessfully',
        })
    )
    }
}
    catch(error){
        
            return res
      .status(500)
      .json(
        errorResponse('Error Brand Data Delete',error)
      );
    }
}
module.exports = { brand, BrandControllerGet, BrandControllerUpdate,deleteBrandData};
