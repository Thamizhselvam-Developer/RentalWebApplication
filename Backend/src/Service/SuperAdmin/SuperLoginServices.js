//const LoginData = require("../Model/RegistraionModel");

const dataconnect = require("../../DataBaseConnection")

const SuperLoginModel = require("../../Model/SuperAdmin/SuperLoginModel");
const bcrypt = require("bcrypt");
const express = require("express");
const exp = express();
const { GenId } = require("../../Utilities/Id_Generator");


const SuperLoginServicesGet= async(id)=>{
  console.log(id)

  try{
   const Data = await SuperLoginModel.SuperLoginModelGet(id)
   
    return Data
  }
  catch(err){
    console.log("err")
  }

}
const SuperLoginServicesData= async(output) =>{

      const hashedPassword = await bcrypt.hash(output.password, 5);
    
      const nanoid = GenId(10);

    const Data = await SuperLoginModel.SuperLoginModelData(nanoid,output.name,output.email,hashedPassword)
        .then((result)=>{
            console.log(result)
            return result
        })
        .catch((err)=>{
            return "ERROR"
        })
}


const SuperLoginFrontend = async (output) => {
  const password= output.password
  const email = output.email;
  const data = await SuperLoginModel.SuperLoginModel(email);
 

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
          const jetData  ={id: data[0].id,email:data[0].email,msg:"Password Match" }
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

module.exports = { SuperLoginFrontend,SuperLoginServicesData,SuperLoginServicesGet };
