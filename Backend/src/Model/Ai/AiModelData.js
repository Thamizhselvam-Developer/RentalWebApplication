const dataconnect = require("../../DataBaseConnection");

const AiModelData = (sql) => {
  return new Promise((resolve, reject) => {
    dataconnect.query(sql, (err, result) => {
      if (err) {
        console.error("SQL Execution Error:", err.message);
        return reject(err);
      } else {
        return resolve(result);
      }
    });
  });
};

module.exports = { AiModelData };