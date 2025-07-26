// models/UserModel.js
const dataconnect = require("../DataBaseConnection");

const findUserById = (userId) => {
  return new Promise((resolve, reject) => {
    dataconnect.query(
      `SELECT id, name, email, phoneNo FROM user WHERE id = ?`,
      [userId],
      (err, result) => {
        if (err) return reject(err);
        if (result.length === 0) return resolve(null);
        return resolve(result[0]);
      }
    );
  });
};

module.exports = { findUserById };
