const jsonwebtoken = require("jsonwebtoken")

const jwt=(id,email)=>{
    // console.log(id,email+"jwt")
   const jwtToken = jsonwebtoken.sign({
        userid:id,
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: email
      }, 'HS256');

    return "Token"+" "+jwtToken


    }
    const Admin_jwt=(id,email)=>{
    // console.log(id,email+"jwt")
   const jwtToken = jsonwebtoken.sign({
        userid:id,
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: email
      }, 'HS256');

    return "AdminToken"+" "+jwtToken


    }

    const ShopAdmin_jwt=(id,email)=>{
    // console.log(id,email+"jwt")
   const jwtToken = jsonwebtoken.sign({
        userid:id,
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: email
      }, 'HS256');

    return "ShopAdminToken"+" "+jwtToken


    }


    // console.log(jwt()+"hvg")

    module.exports={jwt,ShopAdmin_jwt,Admin_jwt}





