const RegistraionModel = require("../Model/RegistraionModel");
const { GenId } = require("../Utilities/Id_Generator");
const pathWin = require("path").win32;

const bcrypt = require("bcrypt");

const RegistrationDataFuction = async (output,file) => {
  const hashedPassword = await bcrypt.hash(output.password, 5);
  const email = output.email;
  const mobile =output.mobile;
  const data = await RegistraionModel.RegistraionCheck(email,mobile);

  
   
 
  console.log(data,"sd  ",email , data.length)
  return new Promise((resolve, reject) => {
   
 if(data.length > 0){
   if (data[0].email == email ) {
    console.log("1  ")
    resolve("Already Taken")
    }
    else if(data[0].phoneNo == mobile){
      resolve ("Mobile Number Already Taken")
    }
  }
     else {
      const nanoid = GenId(10);
      const UserImgName = pathWin.basename(file.filename);
      const UserImgPath = pathWin.dirname(file.destination);
       RegistraionModel.toAddRegistraionData(nanoid,output.name,output.mobile,output.email,hashedPassword,output.Address,output.City,output.State,UserImgName,UserImgPath,output.Pincode)
        .then((result) => {
          resolve("Registration succesfully");

        })
      
    }
  
  
  })

};





const RegistraionServicesGet =async(id)=>{
  console.log(id,"SERVICES")

  try{
    const Data =  await RegistraionModel.RegistraionModelGet(id)
return Data

  }
  catch(err){
    return err

  }



}


const RegistrationImage=async(id)=>{
  try{

    const Data = await RegistraionModel.RegistraionModelImageGet(id)
return Data[0]

  }
  catch(err){

  }
}

module.exports = { RegistrationDataFuction,RegistraionServicesGet,RegistrationImage };
