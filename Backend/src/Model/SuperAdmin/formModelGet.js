const dataconnect = require("../../DataBaseConnection");

const foemModelGet=(id)=>{

    return new Promise((resolve, reject) => {
        const query = `SELECT rental_shop_tbl SET isApproved =? WHERE id=? `

    dataconnect.query(query, [isApproved,id], (error,results) => {
                       if (error) {
                           console.log("Database erroru: " + error.message)
           
                           return reject("Database error: " + error.message);
                       }
                       resolve(results);
                   });
    })

}

module.exports={foemModelGet}