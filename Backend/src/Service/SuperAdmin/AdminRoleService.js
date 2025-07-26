const dataconnect = require("../../DataBaseConnection");
const AdminRoleModel = require("../../Model/SuperAdmin/AdminRoleModel");
const { GenId } = require("../../Utilities/Id_Generator");
const { pass } = require("../../Utilities/pasword");
const bcrypt = require("bcrypt");

const baseServiceGetData = async () => {
  try {
    const result = await AdminRoleModel.baseModelDataGet();
    return result;
  } catch (err) {
    return err;
  }
};

const baseServiceData = async (data) => {
  try {
    const Data = await AdminRoleModel.baseModelRoleData(data.adminroleName);
    const nanoid = GenId(10);
    const password = pass(8);
    const hashedPassword = await bcrypt.hash(password, 5);

    const result = await AdminRoleModel.baseModelAdminRole(
      nanoid,
      data.name,
      data.email,
      hashedPassword,
      Data
    );
    return { result, password };
  } catch (error) {
    console.log("Services Error");
    throw error;
  }
};

const checkIfRoleExists = (adminRoleId) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT id FROM adminrole_tbl WHERE id = ?`;
    dataconnect.query(query, [adminRoleId], (error, results) => {
      if (error) {
        console.log("Checking Error:", error.message);
        return reject(error);
      }
      if (results.length === 0) {
        return reject(new Error("Role ID does not exist"));
      }
      resolve(true);
    });
  });
};

const baseServiceUpdateData = async (data) => {
  try {
    await checkIfRoleExists(data.adminRoleId);
    const result = await AdminRoleModel.baseModelUpdate(
      data.id,
      data.name,
      data.email
    );
    const res = await AdminRoleModel.baseModelUpdateRoleData(
      data.adminRoleId,
      data.adminroleName
    );
    return { result, res };
  } catch (error) {
    console.log("Update Error:", error.message);
    throw error;
  }
};

const deleteAdminRoleDataServices=async(id,adminId)=>{
     const Data = await AdminRoleModel.deleteAdminRoleDataModels(id,adminId)
            return Data
}
module.exports = {
  baseServiceData,
  baseServiceGetData,
  checkIfRoleExists,
  baseServiceUpdateData,
  deleteAdminRoleDataServices
};
