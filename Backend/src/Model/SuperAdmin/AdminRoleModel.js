const dataconnect = require("../../DataBaseConnection");

// const checkIfRoleExists = (adminRoleId) => {
//     return new Promise((resolve, reject) => {
//         const query = `SELECT id FROM adminrole_tbl WHERE id = ?`;
//         dataconnect.query(query, [adminRoleId], (error, results) => {
//             if (error) {
//                 console.log("Error checking role existence:", error.message);
//                 return reject(error);
//             }
//             if (results.length === 0) {
//                 return reject(new Error("Role ID does not exist"));
//             }
//             resolve(true);
//         });
//     });
// };


const baseModelDataGet = () => {
    return new Promise((resolve, reject) => {
        const query = `SELECT superadmin_tbl.id, superadmin_tbl.name, superadmin_tbl.email, 
                       adminrole_tbl.id AS adminRoleId, adminrole_tbl.name AS adminroleName  
                FROM superadmin_tbl 
                JOIN adminrole_tbl ON superadmin_tbl.adminRoleId = adminrole_tbl.id
                where superadmin_tbl.isDeleted=0`
                ;
        dataconnect.query(query, (error, results) => {
            if (error) {
                console.log("baseModelDataGet Error:", error.message);
                return reject(error);
            } else {
                return resolve(results);
            }
        });
    });
};

const baseModelAdminRole = (id, name, email, password, admin_role_id) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO superadmin_tbl(id, name, email, password, adminRoleId) VALUES(?,?,?,?,?)`;
        dataconnect.query(query, [id, name, email, password, admin_role_id], (error, results) => {
            if (error) {
                console.log("baseModelAdminRole Error:", error.message);
                return reject(new Error("Failed Insert"));
            }
            resolve(results.insertId); 
        });
    });
};


const baseModelUpdate = (id, name, email) => {
    return new Promise((resolve, reject) => {
        const query = `UPDATE superadmin_tbl SET name=?, email=? WHERE id=?`;
        dataconnect.query(query, [name, email, id], (error, results) => {
            if (error) {
                console.log("Error in baseModelUpdate:", error.message);
                return reject(new Error("Failed update"));
            }
            resolve(results);
        });
    });
};


// const baseModelRoleData = (adminroleName) => {
//     return new Promise((resolve, reject) => {
//         const checkRoleQuery = `SELECT id FROM adminrole_tbl WHERE name = ? LIMIT 1`;
//         dataconnect.query(checkRoleQuery, [adminroleName], (checkError, checkResults) => {
//             if (checkError) {
//                 console.log("baseModelRoleData Error:", checkError.message);
//                 return reject(checkError);
//             }

//             if (checkResults.length > 0) {
//                 return resolve(checkResults[0].id);
//             } else {
//                 const insertQuery = `INSERT INTO adminrole_tbl (name) VALUES(?)`;
//                 dataconnect.query(insertQuery, [adminroleName], (insertError, insertResults) => {
//                     if (insertError) {
//                         console.log("Insert RoleError:", insertError.message);
//                         return reject(insertError);
//                     }
//                      //change=(data.insertResults).toUppercase()
//                     resolve(insertResults.insertId); 
//                 });
//             }
//         });
//     });
// };

const baseModelRoleData = (adminroleName) => {
    return new Promise((resolve, reject) => {
        const upperCaseRoleName = adminroleName.toUpperCase(); // Convert to uppercase

        const checkRoleQuery = `SELECT id FROM adminrole_tbl WHERE name = ? LIMIT 1`;
        dataconnect.query(checkRoleQuery, [upperCaseRoleName], (checkError, checkResults) => {
            if (checkError) {
                console.log("baseModelRoleData Error:", checkError.message);
                return reject(checkError);
            }

            if (checkResults.length > 0) {
                return resolve(checkResults[0].id);
            } else {
                const insertQuery = `INSERT INTO adminrole_tbl (name) VALUES(?)`;
                dataconnect.query(insertQuery, [upperCaseRoleName], (insertError, insertResults) => {
                    if (insertError) {
                        console.log("Insert Role Error:", insertError.message);
                        return reject(insertError);
                    }
                    resolve(insertResults.insertId); 
                });
            }
        });
    });
};

const baseModelUpdateRoleData = (id, role) => {
    console.log(id, role, "MODEL");
    return new Promise((resolve, reject) => {
        const Updaterole=role.toUpperCase()
        const query = `UPDATE adminrole_tbl SET name=? WHERE id=?`;
        dataconnect.query(query, [Updaterole, id], (error, results) => {
            if (error) {
                console.log("baseModelUpdateRoleData Error:", error.message);
                return reject(new Error("Update RoleError"));
            }
             if (results.affectedRows === 0) {
                console.log("No rows updated");
                return reject(new Error("Role not updated Role ID may not exist."));
            }
            console.log("Role updated successfully:", results);
            resolve(results);
        });
    });
};

const deleteAdminRoleDataModels=(id,adminId)=>{
  return new Promise((resolve, reject) => {
      dataconnect.query(
        `UPDATE superadmin_tbl SET isDeleted = 1 ,deletedAt=NOW() , deletedBy=?  where id = ?`,
        [adminId,id],
        (err, result) => {
          if (err) {
             reject(err);
          } else {
             resolve(result);
          }
        }
           );
    });
}
module.exports={baseModelRoleData,baseModelAdminRole,baseModelDataGet,baseModelUpdate,baseModelUpdateRoleData ,deleteAdminRoleDataModels}