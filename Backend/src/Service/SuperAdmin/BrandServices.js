const BrandTypeModel = require("../../Model/SuperAdmin/BrandTypeModel");

const BrandServicesUpdate = (data) => {
  return new Promise((resolve, reject) => {
    try {
      if (data) {
        BrandTypeModel.BrandTypeModelUpdate(data.id, data.name, data.updatedBy)
          .then((result) => {
            resolve(result);
          })
          .catch(() => {});
      } else {
        return reject();
      }
    } catch (error) {
      reject();
      console.log("Brand Services Error");
    }
  });
};

const BrandServicesDataGet = () => {
  return new Promise((resolve, reject) => {
    try {
      BrandTypeModel.BrandTypeModelDataGet()
        .then((results) => {
          resolve(results);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (err) {}
  });
};

const BrandServicesData = (data) => {
  return new Promise((resolve, reject) => {
    try {
      if (data) {
        BrandTypeModel.BrandTypeModelData(data.name, data.CreatedBy)
          .then((result) => {
            resolve(result);
          })
          .catch(() => {});
      } else {
        return reject();
      }
    } catch (error) {
      reject();
      console.log("Brand Services Error");
    }
  });
};
const pathBrandDataServices=async(id,adminId)=>{
      const Data = await BrandTypeModel.pathBrandDataModels(id,adminId)
        return Data
    }
module.exports = {
  BrandServicesData,
  BrandServicesDataGet,
  BrandServicesUpdate,
  pathBrandDataServices
};
