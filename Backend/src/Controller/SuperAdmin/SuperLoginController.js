
const SuperLoginServices = require("../../Service/SuperAdmin/SuperLoginServices");
const SuperLoginModel = require("../../Model/SuperAdmin/SuperLoginModel");
const jwt = require("../../Utilities/SuperAdminJwt/SuperAdminJwt");


const SuperLoginGet=async(req,res)=>{

  try{

    const id = req.params.id
    const Data =await SuperLoginServices.SuperLoginServicesGet(id)
      res.send(Data)

  }
  catch(err){
    res.send(err,"ERRROR")

  }

}

const SuperLoginControllerData=(req,res)=>{
    let body = "";

    req.on("data", (packetdata) => (body += packetdata)); //body = body + packetdata
    req.on("end", () => {
      if(!body){
        return res.status(401).send({msg: "Invalid "})
      }
     try {
        let output =JSON.parse(body);

          console.log(output,"Controller")
          SuperLoginServices.SuperLoginServicesData(output)
          .then((data)=>{
            if(data){
              res.send("Data REceived")

            }
          })
          .catch((err)=>{
            res.send("Error OR INVALID")
          })
    }
catch(err){
    res.send("ERROR")
}})
    
}
const SuperLogin = (req, res) => {
  
    let body = "";

    req.on("data", (packetdata) => (body += packetdata)); //body = body + packetdata
    req.on("end", () => {
      if(!body){
        return res.status(401).send({msg: "Invalid "})
      }
     try {
        let output = req.cookies;

          console.log(output,"Controller")
          SuperLoginServices.SuperLoginFrontend(output)
          .then((Data) => {
            if(Data.msg =="Password Match"){
                        res.cookie("SuperAdmin",jwt.jwt(Data.id,Data.email),{
                         maxAge:900000,
                         httpOnly:true,
                         secure:false,
                         samesite:false
           
                        })
                        res.cookie("path","/")
                        res.cookie("id",Data.id)
           
                         res.send({message:"LoginSucess"});
                         console.log("ok");  
                       }
            else if(Data == "Password Does Not Match"){
              res.send({message:"Password Does Not Match"})
            }
            else if(Data == "User Not Found"){
              res.send({message:"User Not Found"})
            }
           
          })
          .catch((err) => {
            console.log(err)
            res.send("Invaild credentialsss");
          });

        
      }
      catch(err){
        res.send("Invaild credential");

      }
    });

};

module.exports = { SuperLogin,SuperLoginControllerData,SuperLoginGet };
