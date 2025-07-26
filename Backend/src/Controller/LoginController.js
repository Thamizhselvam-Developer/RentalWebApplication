const RegistraionModel = require("../Model/RegistraionModel");
const SuperLoginServices = require("../Service/SuperAdmin/SuperLoginServices");


const Login_Authication = require("../Service/Login_Authication");
const LoginModel = require("../Model/LoginModel");
const jwt = require("../Utilities/Jwt");

const ShopLoginServices = require("../Service/ShopAdmin/ShopLoginServices")
const Login = (req, res) => {
  // let body = "";

  // req.on("data", (packetdata) => (body += packetdata)); //body = body + packetdata
  // req.on("end", () => {
     const cookies = req.cookies;

    // if (!cookies || !cookies.whois) {
    //   return res.send({ message: "Missing authentication cookies" });
    // }
    try {
      let output =  req.body

      if (output.whois == "User") {
        console.log(output, "Controller");
        Login_Authication.LoginFrontend(output)
          .then((Data) => {
            if (Data.msg == "Password Match") {
                       res.cookie("Token", jwt.jwt(Data.id, Data.email), {
                maxAge: 900000,
                httpOnly: false,
                secure: true,
                sameSite: "None",
              });
             res.cookie("patth", "/", {
                        maxAge: 900000,
                        httpOnly: false,
                        secure: true,
                        sameSite: "None", // CHANGED: Allow cross-site requests
                        path: "/"
                    });

 res.cookie("id", Data.id, {
                        maxAge: 900000,
                        httpOnly: false,
                        secure: true,
                        sameSite: "None", // CHANGED: Allow cross-site requests
                        path: "/"
                    });

                    res.cookie("Name", Data.name, {
                        maxAge: 900000,
                        httpOnly: false,
                        secure: true,
                        sameSite: "None", // CHANGED: Allow cross-site requests
                        path: "/"
                    });
              res.send({
  message: "LoginSuccess",
  id: Data.id,
  name: Data.name
});

              console.log("ok");
            } else if (Data == "Password Does Not Match") {
              res.send({ message: "Password Does Not Match" });
            } else if (Data == "User Not Found") {
              res.send({ message: "User Not Found" });
            }
          })
          .catch((err) => {
            console.log(err);
            res.send("Invaild credentialsss");
          });
      }
      else if(output.whois == "SuperAdmin"){
        SuperLoginServices.SuperLoginFrontend(output)
                  .then((Data) => {
                    if(Data.msg =="Password Match"){
                      res.cookie("AdminToken", jwt.Admin_jwt(Data.id, Data.email), {
                        maxAge: 900000,
                        httpOnly: false,
                        secure: false,
                        samesite: false,
                      });
                                res.cookie("path","/")
                                res.cookie("id",Data.id)
                   
                                 res.send({message:"LoginSucess",
                                  id: Data.id,
                                 });
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
      else if(output.whois == "ShopAdmin"){
        ShopLoginServices.ShopLoginData(output)
                  .then((Data) => {
                    if(Data.msg =="Password Match"){
                      res.cookie("ShopAdminToken", jwt.ShopAdmin_jwt(Data.id, Data.email), {
                        maxAge: 900000,
                        httpOnly: false,
                        secure: false,
                        samesite: false,
                      });
                                res.cookie("path","/")
                                res.cookie("id",Data.id)
                                res.cookie("ShopID",Data.ShopId)
                                res.send({message:"LoginSucess",
                                  id : Data.id,
                                  ShopId :Data.ShopId
                                });
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
    } catch (err) {
      res.send("Invaild credential");
    }
  // });
};

module.exports = { Login };
