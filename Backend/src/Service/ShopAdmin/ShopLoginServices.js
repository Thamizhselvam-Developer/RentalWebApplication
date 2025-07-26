const ShopLoginModel = require("../../Model/ShopAdmin/ShopLoginModel")
const bcrypt = require('bcrypt')

const ShopLoginServicesGet=async(id)=>{
  console.log(id)

  try{
   const Data = await ShopLoginModel.ShopLoginModelGet(id)
   
    return Data
  }
  catch(err){
    console.log("err")
  }
}
const ShopLoginData = async (output) => {
  const password= output.password
  const email = output.email;
  const data = await ShopLoginModel.ShopLoginModel(email);
 

  return new Promise((resolve, reject) => {
    if (data.length == 0) {
      console.log("USer not found")
    return resolve("User Not Found");
    }
  const DbPass = data[0].password;

    if (email == data[0].email) {
      bcrypt.compare(password, DbPass, (err, result) => {
        if (err) {
         return reject("Error")
        } else if(result) {
          const jetData  ={id: data[0].id,email:data[0].email,ShopId:data[0].rentalShop_id,msg:"Password Match" }
          return resolve(jetData)
        }
        else{

         return  resolve("Password Does Not Match")
        }
      });
  }
  else{
    return reject()

  }
  
    
    
  });
};


module.exports={ShopLoginData,ShopLoginServicesGet}