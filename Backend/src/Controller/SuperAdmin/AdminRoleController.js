const AdminRoleService = require("../../Service/SuperAdmin/AdminRoleService");
require("dotenv").config();
const Email = require("../../Utilities/Email/Email");
const {errorResponse} = require("../../Utilities/apiResponse")
const {succesResponse} = require ("../../Utilities/apiResponse")
const baseControllerGet = async (req, res) => {
  try {
    const data = await AdminRoleService.baseServiceGetData();
    res.send(data);
  } catch (error) {
    res.status(500).send("ERROR");
  }
};

const baseControl = async (req, res) => {
  try {
    let output = req.body;
    const email = output.email;
    await AdminRoleService.baseServiceData(output)
    .then(async (result) => {
      if (result.password) {
          // Prepare email HTML
          const html = `
            <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 30px;">
              <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);">
                <div style="padding: 30px;">
                  <h2 style="color: #1e40af; text-align: center; margin-bottom: 20px;">Admin Login Credentials</h2>
                  <p style="font-size: 16px; color: #333;">Dear Admin,</p>
                  <p style="font-size: 16px; color: #333; line-height: 1.6;">
                    Your admin account has been created. Below are your login details:
                  </p>
                  <table style="margin: 20px 0; width: 100%; font-size: 16px;">
                    <tr>
                      <td style="font-weight: bold; padding: 8px 0;">Email:</td>
                      <td style="color: #1e293b;">${email}</td>
                    </tr>
                    <tr>
                      <td style="font-weight: bold; padding: 8px 0;">Password:</td>
                      <td style="color: #1e293b;"><strong>${result.password}</strong></td>
                    </tr>
                  </table>
                  <p style="font-size: 16px; color: #333;">
                    Please log in using these credentials and change your password after first login for security purposes.
                  </p>
                  <div style="text-align: center; margin-top: 30px;">
                    <a href="https://yourdomain.com/admin/login" style="background-color: #1e40af; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 6px; font-size: 16px;">
                      Go to Admin Login
                    </a>
                  </div>
                  <p style="font-size: 14px; color: #888888; margin-top: 30px;">
                    If you did not request this, please ignore this email.
                  </p>
                </div>
              </div>
            </div>
          `;

          const options = {
            to: email,
            subject: "Your Admin Login Credentials",
            html, 
          };

        await Email.sendEmail(options);
        res.send({
          info: "Check your mail!",
          message: "Added",
        });

      }
      // console.log(result.password,email)
    });
  } catch (error) {
    console.log("Adding CError:", error.message);
    res.status(500).send("Error adding data");
 
  }
};

const baseControllerUpdate = async (req, res) => {
  try {
    let output = JSON.parse(body);
    console.log(output, "controller");
    await AdminRoleService.baseServiceUpdateData(output);
    res.send("Updated");
    resolve();
  } catch (error) {
    console.log("Update CError:", error.message);
    res.status(500).send("Error updating data");
    reject(error);
  }
};

const deleteAdminRoleData=async(req, res)=>{
 try{
            const id = req.params.id
            const adminId=  req.params.adminId
            console.log(id,adminId)
            const Data = await AdminRoleService.deleteAdminRoleDataServices(id,adminId)
              if(Data){
                 return res
          .status(200)
          .json(
                succesResponse('Deleted', {
              msg: 'Admin Data Deleted Sucessfully',
            })
        )
        }
    }
        catch(error){
            
                return res
          .status(500)
          .json(
            errorResponse('Error Admin Data Delete',error)
          );
        }
    }
module.exports = { baseControl, baseControllerGet, baseControllerUpdate ,deleteAdminRoleData};
