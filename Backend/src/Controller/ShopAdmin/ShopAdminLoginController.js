
const ShopLoginServices = require("../../Service/ShopAdmin/ShopLoginServices")
const jwt = require("../../Utilities/ShopAdminJwt/ShopAdminJwt");

const shoploginGet=async(req,res)=>{
    try{
  
      const id = req.params.id
      const Data =await ShopLoginServices.ShopLoginServicesGet(id)
        res.send(Data)
  
    }
    catch(err){
      res.send(err,"ERRROR")
  
    }
}
const ShopAdminLogin = (req, res) => {
  
    let body = "";

    req.on("data", (packetdata) => (body += packetdata)); //body = body + packetdata
    req.on("end", () => {
      if(!body){
        return res.status(401).send({msg: "Invalid "})
      }
     try {
        let output = req.cookies;

          ShopLoginServices.ShopLoginData(output)
          .then((Data) => {
            if(Data.msg =="Password Match"){
                        res.cookie("ShopAdmin",jwt.jwt(Data.id,Data.email),{
                         maxAge:900000,
                         httpOnly:false,
                         secure:false,
                         samesite:false
           
                        })
                        res.cookie("path","/")
                        res.cookie("id",Data.id)
                        res.cookie("ShopID",Data.ShopId)
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
module.exports={ShopAdminLogin,shoploginGet}