
const dataconnect = require("../../DataBaseConnection");
const ShopLoginModelGet=(id)=>{
 return new Promise((resolve, reject) => {
  
  
          dataconnect.query(`SELECT name,email,address from shop_owner_tbl where id=?`,[id],(err,result)=>{
  
                      if(err){
                        console.log(err.message)
                        return  reject(err)
                      }
                      else{
                        
                        console.log(result)
  
                          return resolve(result)
                          
                      }
          })
  
  })
}
const ShopLoginModel = (email)=>{
    return new Promise((resolve, reject) => {

  console.log(email)

        dataconnect.query(`SELECT id,email,password,rentalShop_id  from shop_owner_tbl   where email=?`,[email],(err,result)=>{

                    if(err){
                      // console.log("model reject")
                      return  reject(err)
                    }
                    else{
                      // console.log("model resolved"+JSON.stringify(result))

                        return resolve(result)
                        
                    }
        })

})
}

module.exports ={ShopLoginModel,ShopLoginModelGet}