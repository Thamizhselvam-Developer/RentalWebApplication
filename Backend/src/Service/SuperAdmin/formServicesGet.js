const formModel = require("../../Model/SuperAdmin/foemModel")

const formServicesGet=async(isApproved,id)=>{
 try{

    const Data = await formModel.foemModel(isApproved,id)

 }
catch(err){
    return err
}
    
}

module.exports={formServicesGet}