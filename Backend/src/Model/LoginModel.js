const dataconnect = require("../DataBaseConnection");

const LoginModel = (email) => {
  return new Promise((resolve, reject) => {
    console.log(email);

    dataconnect.query(
      `SELECT id,name,email,password from  user where email=?`,
      [email],
      (err, result) => {
        if (err) {
          // console.log("model reject")
          return reject(err);
        } else {
          // console.log("model resolved"+JSON.stringify(result))

          return resolve(result);
        }
      }
    );
  });
};

module.exports = { LoginModel };
