const formServies = require("../../Service/SuperAdmin/formServies")

const formStatus=async(req,res)=>{
try {
    const bit = Number(req.params.bit)
    const id = req.params["id"]
    console.log(bit,id,"sdf")
     
    const Data = await formServies.formServicesGet(bit,id)
    res.send("Updated isApproved")

}
catch(err){
    res.send("INTERNAL ERROR")
}
  



}
module.exports={formStatus}