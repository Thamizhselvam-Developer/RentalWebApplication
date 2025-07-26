const path = require("path");
const RentalFormModel = require("../../Model/ShopAdmin/RentalFormModel");
const { GenId } = require("../../Utilities/Id_Generator");
const pathWin = require("path").win32;
const bcrypt = require('bcrypt')
const { pass } = require("../../Utilities/pasword");



const RentalFormServicesGet= async(id)=>{
  return new Promise((resolve, reject) => {
  
     RentalFormModel.RentalFormModelGet(id)
      .then((Data)=>{
       
        resolve( Data) 
      })
      .catch((err)=>{
        reject (err)

      })
    })

  
  
}
const RentalShopImages=async(id)=>{
  const Data = await RentalFormModel.RentalShopImages(id)
  return Data
}
const RentalFormServicesData = async (output,files) => {
 try {

    const licenseDataName = files.image.map((item) => item.filename)
    const licenseDataPath = files.image.map((item) => item.destination)




    const LicenseimageData = await RentalFormModel.RentalFormLicense(licenseDataName, licenseDataPath);

  const hashedPassword = await bcrypt.hash("12345", 5);

    // const hashedPassword = pass(8);
    console.log(hashedPassword)

    const nanoid = GenId(10);
    const AreaData = await RentalFormModel.RentalFormArea(output.Area)
    const shopData = await RentalFormModel.RentalFormShopData(nanoid, output.shopName, output.streetAddress, output.gstNumber, output.pinCode, output.city, output.state, LicenseimageData, AreaData);

    const shopImgName = files.ShopImage.map((item) => item.filename);

    const shopImgPath = files.ShopImage.map((item) => item.destination);

    const imageData = await RentalFormModel.RentalFormImages(shopImgName, shopImgPath, shopData);
        console.log(imageData,"Assssssssssss")

    const OwnerImgName = files.OwnerImage[0].filename;
    const OwnerPathName = files.OwnerImage[0].destination;


    const ownerData = await RentalFormModel.RentalFormOwnerData(output.username, output.contactNumber, output.Email, output.address, output.aadhaarNumber, hashedPassword, OwnerImgName, OwnerPathName, shopData);

    return { imageData, ownerData, shopData , hashedPassword };

  } catch (err) {
    console.error("Error in RentalFormServicesData:", err);
    return  err
  }
};

module.exports = { RentalFormServicesData,RentalFormServicesGet,RentalShopImages };
