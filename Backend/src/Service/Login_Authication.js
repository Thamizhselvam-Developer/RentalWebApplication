const LoginData = require("../Model/RegistraionModel");

const dataconnect = require("../DataBaseConnection");

const LoginModel = require("../Model/LoginModel");
const bcrypt = require("bcrypt");
const jwt = require("../Utilities/Jwt")
const express = require("express");
const exp = express();

const LoginFrontend = async (output) => {
  const password= output.password
  const email = output.email;
  const data = await LoginModel.LoginModel(email);


  

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
          const jetData  ={id: data[0].id,name:data[0].name,email:data[0].email,msg:"Password Match" }
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

module.exports = { LoginFrontend };
