const RegistrationData = require("../Service/RegistrationData");
const path = require('path');
const RegistraionControllerGet = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id, "IDD");
    const Data = await RegistrationData.RegistraionServicesGet(id);
    console.log(Data, "CONTROLLER");

    res.send(Data);
  } catch (err) {
    res.send("ERROR");
  }
};

const RegistraionControllerFucntion = async (req, res) => {
  const userData = req.body;
  const file = req.file;

  try {
    await RegistrationData.RegistrationDataFuction(userData,file)
    .then(
      (result) => {
        console.log(result)
        if (result == "Registration succesfully") {
          res.send("Registration succesfully");
        } else if (result == "Already Taken") {
          res.send("Already Taken");
        }
        else if(result == "Mobile Number Already Taken"){
            res.send("Mobile Number Already Taken")
        }
      }
    );
  } catch (err) {

    console.log(err)
    res.send(err);
  }
};

const RegistraionControllerProfile = async(req,res)=>{

  const id = req.params["id"];
  

    await RegistrationData.RegistrationImage(id)
    .then((result)=>{
      // console.log(req.protocol+"://"+ req.get("host")+"/"+ "uploads" +"/"+result.id_proof_name)
        const imagePath =req.protocol+"://"+ req.get("host")+"/"+ "uploads" +"/"+result.id_proof_name;
        
        res.send({img:imagePath}) 
    })  


}

module.exports = { RegistraionControllerFucntion, RegistraionControllerGet ,RegistraionControllerProfile};
