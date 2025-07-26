const VehicleTypeModel = require("../../Model/SuperAdmin/VehicleTypeModel");

const VehicleServicesDataGet = () => {
  return new Promise((resolve, reject) => {
    try {
      VehicleTypeModel.VehicleTypeModelDataGEt()
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (err) {
      reject(err);
    }
  });
};

const VehicleServicesDataUpdate = (output) => {
  return new Promise((resolve, reject) => {
    try {
      VehicleTypeModel.VehicleTypeModelDataUpadate(
        output.name,
        output.des,
        output.updatedBy,
        output.id
      )
        .then((result) => {
          console.log(JSON.stringify(result) + "SERVICES");
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (err) {
      reject(err);
    }
  });
};

const VehicleServicesData = (data) => {
  return new Promise((resolve, reject) => {
    try {
      if (data) {
        VehicleTypeModel.VehicleTypeModelData(
          data.name,
          data.des,
          data.CreatedBy
        );
        return resolve();
      } else {
        return reject();
      }
    } catch (error) {
      console.log("Vehicle Services Error");
    }
  });
};

const patchVehicleServices= async(id,adminId)=>{
    const Data = await VehicleTypeModel.patchVehicleModels(id,adminId)
    return Data
}
module.exports = {
  VehicleServicesData,
  VehicleServicesDataGet,
  VehicleServicesDataUpdate,
  patchVehicleServices
};
