const dataconnect = require("../DataBaseConnection");
const LoginServices =require ("../Service/Login_Authication")

const RegistraionCheck=(email,Phone)=>{
    return new Promise((resolve, reject) => {
        dataconnect.query( `SELECT email,phoneNo FROM user WHERE email = ? OR phoneNo= ? `,[email,Phone],(err,result)=>{
              if(err){
                  console.log(err.message)
                return  reject(err)
              }
              else{
                  console.log(result,"h")
                  return resolve(result)
                  
              }
  })

    })
}

const RegistraionModelGet = (id)=>{
    return new Promise((resolve, reject) => {
console.log(id,"MODEL   ")
        dataconnect.query(`SELECT name, phoneNo, email,Address,city,state,pincode from user Where id=?`,[id],(err,result)=>{
                  console.log("MODEL.........")
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

const toAddRegistraionData = (id,name, phoneNo, email, password,Address,city,state,id_proof_name,id_proof_path,pincode) => {
    return new Promise((resolve, reject) => {

        const query = `INSERT INTO user(id,name, phoneNo, email, password,Address,city,state,id_proof_name,id_proof_path,pincode) VALUES (?,?,?,?,?,?,?,?,?,?,?)`;

        dataconnect.query(query, [id,name, phoneNo, email, password, Address,city,state,id_proof_name,id_proof_path,pincode], (error,results) => {
            if (error) {
                console.log("Database error: "+error.message)

                return reject("Database error: " + error.message );
            }

            resolve("Data inserted.");
        });
    });
};

const RegistraionModelImageGet=(id)=>{
    return new Promise((resolve, reject) => {
        dataconnect.query(`SELECT id_proof_name from user Where id=?`,[id],(err,result)=>{
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


module.exports = { toAddRegistraionData ,RegistraionModelGet,RegistraionCheck,RegistraionModelImageGet};
