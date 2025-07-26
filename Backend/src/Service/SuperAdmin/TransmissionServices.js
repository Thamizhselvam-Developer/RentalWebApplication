const TransmissionTypeModel = require("../../Model/SuperAdmin/TransmissionTypeModel");

const TransmissionServicesDataGet = () => {
  return new Promise((resolve, reject) => {
    try {
      TransmissionTypeModel.TransmissionTypeModelDataGet()
        .then((results) => {
          resolve(results);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (err) {}
  });
};

const TransmissionServicesUpdate = (data) => {
  return new Promise((resolve, reject) => {
    try {
      if (data) {
        TransmissionTypeModel.TransmissionTypeModelUpdate(
          data.id,
          data.name,
          data.updateBy
        );
        return resolve();
      } else {
        return reject();
      }
    } catch (error) {
      console.log("Transmit Services Error");
    }
  });
};

const TransmissionServicesData = (data) => {
  return new Promise((resolve, reject) => {
    try {
      if (data) {
        TransmissionTypeModel.TransmissionTypeModelData(
          data.name,
          data.CreatedBy
        );
        return resolve();
      } else {
        return reject();
      }
    } catch (error) {
      console.log("Transmit Services Error");
    }
  });
};
const pathTransmissionDataServices=async(id,adminId)=>{
  const Data = await TransmissionTypeModel.pathTransmissionDataModels(id,adminId)
        return Data
}
module.exports = {
  TransmissionServicesData,
  TransmissionServicesDataGet,
  TransmissionServicesUpdate,
  pathTransmissionDataServices
};
