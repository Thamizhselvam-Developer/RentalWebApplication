const foemModelGet = require("../../Model/SuperAdmin/foemModel")

const formServicesGet=async(isApproved,id)=>{
 try{

    const Data = await foemModelGet.foemModelGet(isApproved,id)
    return Data
 }
catch(err){
    return err
}
    
}

module.exports={formServicesGet}