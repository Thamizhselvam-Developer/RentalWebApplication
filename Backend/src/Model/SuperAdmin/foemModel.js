const dataconnect = require("../../DataBaseConnection");

const foemModelGet=(isApproved,id)=>{

    return new Promise((resolve, reject) => {
        const query = `UPDATE rental_shop_tbl SET isApproved =? WHERE id=? `

    dataconnect.query(query, [isApproved,id], (error,results) => {
                       if (error) {
                           console.log("Database error: " + error.message)
           
                           return reject("Database error: " + error.message);
                       }
                       resolve(results);
                   });
    })

}

// const OwnerData=(id)=>{
//       return new Promise((resolve, reject) => {
//         const query = `select name,email,phoneNumber from shop_owner_tbl   WHERE rentalShop_id=? `

//     dataconnect.query(query, [id], (error,results) => {
//                        if (error) {
//                            console.log("Database error: " + error.message)
           
//                            return reject("Database error: " + error.message);
//                        }
//                        resolve(results);
//                    });
//     })

// }

module.exports={foemModelGet}