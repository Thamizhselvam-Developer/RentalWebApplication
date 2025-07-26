const FuelTypeModel = require("../../Model/SuperAdmin/FuelTypeModel");

const FuelServicesUpdate = (data) => {
  return new Promise((resolve, reject) => {
    try {
      if (data) {
        FuelTypeModel.FuelTypeModelUpdate(data.id, data.name, data.updatedBy);
        resolve();
      }
    } catch (error) {
      reject();
      console.log("Fuel Services Error");
    }
  });
};

const FuelServicesDataGet = () => {
  return new Promise((resolve, reject) => {
    try {
      FuelTypeModel.FuelTypeModelDataGet()
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {}
  });
};

const FuelServicesData = (data) => {
  return new Promise((resolve, reject) => {
    try {
      if (data) {
        console.log(data);
        FuelTypeModel.FuelTypeModelData(data.name, data.CreatedBy);
        return resolve();
      } else {
        return reject();
      }
    } catch (error) {
      console.log("Fuel Services Error");
    }
  });
};
const pathFuelDataServices=async(id,adminId)=>{
  const Data = await FuelTypeModel.pathFuelDataModels(id,adminId)
        return Data
}

module.exports = { FuelServicesData, FuelServicesDataGet, FuelServicesUpdate ,pathFuelDataServices };
