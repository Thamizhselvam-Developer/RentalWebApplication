const jsonwebtoken = require("jsonwebtoken")

const jwt=(id,email)=>{
    // console.log(id,email+"jwt")
   const jwtToken = jsonwebtoken.sign({
        userid:id,
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: email
      }, 'HS256');
      console.log(jwtToken)

    return "ShopAdmin "+" "+jwtToken


    }

    // console.log(jwt()+"hvg")

    module.exports={jwt}





