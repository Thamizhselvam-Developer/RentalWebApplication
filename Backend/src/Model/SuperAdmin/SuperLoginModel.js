
const dataconnect = require("../../DataBaseConnection");

const SuperLoginModelGet =(id)=>{
  return new Promise((resolve, reject) => {

  
          dataconnect.query(`SELECT name,email from  superadmin_tbl where id=?`,[id],(err,result)=>{
  
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
const SuperLoginModelData=(id,name,email,password)=>{
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO superadmin_tbl(id,name,email,password) VALUES (?,?,?,?)`;

        dataconnect.query(query, [id,name,email, password], (error,results) => {
            if (error) {
                console.log("Database error: "+error.message)

                return reject("Database error: " + error.message );
            }

            resolve(results);
        });
    })
}

       










const SuperLoginModel = (email)=>{
    return new Promise((resolve, reject) => {

  console.log(email)

        dataconnect.query(`SELECT id,email,password from  superadmin_tbl where email=?`,[email],(err,result)=>{

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

module.exports ={SuperLoginModel,SuperLoginModelData,SuperLoginModelGet}