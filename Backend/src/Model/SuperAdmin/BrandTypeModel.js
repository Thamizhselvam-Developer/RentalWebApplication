const dataconnect =require("../../DataBaseConnection")

const BrandTypeModelUpdate=(id,name,updatedBy)=>{
    console.log(id,name)
    return new Promise((resolve, reject) => {


    dataconnect.query(`UPDATE brand_tbl SET name=? ,updatedBy=? where id=?`,[name,updatedBy,id],(err,result)=>{
            if(err){
                return reject("karthiga");
            }
            else{
                return resolve(result);
            }
        })
    })

}









const BrandTypeModelDataGet=()=>{
    return new Promise((resolve, reject) => {
        const query=`SELECT id,name FROM brand_tbl where isDeleted = 0 `
        dataconnect.query(query,(error,results)=>{
            if(error){
                return reject("karthiga");
            }
            else{
                return resolve(results);
            }
        })
    })

}

const BrandTypeModelData=(name,CreatedBy)=>{
    return new Promise((resolve, reject) => {
        const query=`INSERT INTO brand_tbl(name,createdBy) VALUES(?,?)`;
        dataconnect.query(query,[name,CreatedBy], (error,results)=>{
            if (error) {
                console.log(error.message)

                return reject( );
            }
            else{
                console.log(results)
                return resolve();
            }

            
        })
       

    })
}
const pathBrandDataModels=(id,adminId)=>{
     return new Promise((resolve, reject) => {
    const query = `UPDATE brand_tbl SET isDeleted=1,deletedAt=NOW(), deletedBy=? where id=?`; 
    dataconnect.query(query,[adminId,id], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports={BrandTypeModelData,BrandTypeModelDataGet,BrandTypeModelUpdate,pathBrandDataModels}