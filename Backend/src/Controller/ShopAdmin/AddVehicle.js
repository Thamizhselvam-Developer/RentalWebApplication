 
const AddVehicleServices =require ("../../Service/ShopAdmin/AddVehicleServices")


const AddvehicleGet= async(req,res)=>{
   try{
    const id = req.params["id"]
    // console.log(id,"asd")
             const Data =await AddVehicleServices.AddVehicleServicesGet(id)
             res.send(Data)
          }
            catch(err){
              res.send("Not Valid")
            }
}

const AddVehicleDataUpdate=async(req,res)=>{

let body=req.body
  // let file =req.files  
  // console.log(body.keys,"ss")
      let file = req.files
      // console.log(body ,req.files,"asdfasdfdsaf")
// console.log("hii",file)
  // if(Object.keys(file).length == 0 && Object.keys(body).length ==0){

  // return res.send("No Changes")

  // }
  // if (!file.AdditionalImages && file.AdditionalImages == 0)
  if(body != {} || file.FrontImage.length>0 || file.AdditionalImages.length>0)
    {
// console.log(body)
 try{
        const Data =await AddVehicleServices.AddVehicleServicesUpdateInputFields(body);
         const FrontFile = file.FrontImage


        if(file.FrontImage.length>0){
        const result =await AddVehicleServices.AddVehicleServicesUpdateFrontImg(body,FrontFile[0])
            return res.send({RES:"Updated"})
        }

        if(file.AdditionalImages.length >0){
    let ImagesName =[]
      ImagesName = file.AdditionalImages.map((item)=>
    item.filename)
    const id = body.AdditionalImagesID
     const  Data = await AddVehicleServices.AddVehicleServicesUpdateDetailImg(ImagesName,id,body.VehicleID)
      res.send({MSG:"Updated"})
        return res.send("Updated");
}}
catch(err){
  res.send({ERROR:"ERROR"})
}
  
}

}
//  
//   else{
// res.send({msg:"NO CHANGES"})
//     // console.log("NOOOOOOOOO")
//   }
// }

const AddVehicleGetImages= async(req,res)=>{
  try{
    const id = req.params["id"]
             const Data =await AddVehicleServices.AddVehicleServicesGetImages(id)
             res.send(Data)
          }
            catch(err){
              res.send("Not Valid")
            }
}
const AddVehicleGetByID = async(req,res)=>{
  try{
    const id = req.params["id"]
             const Data =await AddVehicleServices.AddVehicleServicesGetByID(id)
            //  console.log(Data)
             res.send(Data)
          }
            catch(err){
              res.send("Not Valid")
            }
}






const AddVehicleData = async(req, res) => {

    try {
      let output = req.body
      let files = req.files
        // console.log(output,"--------",files)
       await AddVehicleServices.AddVehicleServicesData(output,files)
    
     .then((result)=>{
      res.send("Success")
        //       const imagePath =req.protocol+"://"+ req.get("host")+"/"+ "uploads" +"/"+result.VehicleName;
        // res.send({img:imagePath}) 
     })
      
    } 
    catch (err) {
      res.send("Invalid");
    }

};

module.exports = { AddVehicleData,AddvehicleGet,AddVehicleDataUpdate,AddVehicleGetImages,AddVehicleGetByID};
