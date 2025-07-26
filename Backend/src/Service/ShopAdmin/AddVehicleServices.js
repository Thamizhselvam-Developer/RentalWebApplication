const { GenId } = require("../../Utilities/Id_Generator");
const pathWin = require("path").win32;
const AddVehicleModel = require("../../Model/ShopAdmin/AddVehicleModel")


const AddVehicleServicesGet=(id)=>{
return new Promise((resolve, reject) => {
  
    AddVehicleModel.AddVehicleModelGet(id)
      .then((Data)=>{
        console.log(Data)
        
        resolve( Data) 
      })
      .catch((err)=>{
        reject (err)

      })
    })
}

const AddVehicleServicesUpdateDetailImg= async(Name,Id,vehicleId)=>{
  try{
    const imgIds = Array.isArray(Id) ? Id : [Id];
    
    console.log(Id,"NOO")
           

 const Data = await AddVehicleModel.AddVehicleModelUpdateDetailImg(Name,imgIds,vehicleId)
      return  Data 
  }
    
      catch(err){
console.log(err.message)
        return err

      }
    }


const AddVehicleServicesUpdateFrontImg =async(output,files)=>{
  
  try{
    console.log(files+"asssssssssssssssss")
           const nanoid = output.VehicleID

    const  VehicleName = files.filename
          const VehiclePath = files.destination

 const Data = await AddVehicleModel.AddVehicleModelFrontImg(nanoid,VehiclePath,VehicleName,output.updatedBy)
      return  Data 
  }
    
      catch(err){
console.log(err.message)
        return err

      }
    }

const AddVehicleServicesUpdateInputFields=async(output)=>{
//     console.log(typeof(output),"SERVICES",id)
// // console.log(Object.fromEntries(output),"ohih")
// const res = Object.keys(output).map(
//     (key) => output[key]
// )
// console.log(output.map((item)=>item))
  try{
// // let obj = Object.assign({}, output[0]);
// // console.log(JSON.stringify(obj));
// //            const nanoid = output.VehicleID
//  const Datas = res[0].split(',')
// //  .isArray ? res[0] : [res[0]]
// console.log(Datas)
// let i=0;
// let yes = []
// while(i<Datas.length){
//   console.log(Datas[i])
// let a = [[Datas[i],Datas[i+1]]];
// let obj = Object.fromEntries(a);

// let ans = JSON.parse(JSON.stringify(obj))
// yes.push(ans)
// i+=2;
// }
// console.log(yes,"koo")


    
//  const Data = await AddVehicleModel.AddVehicleModelUpdateInputFields(yes,id,VechileID)

  
 const Data = await AddVehicleModel.AddVehicleModelUpdateInputFields(output.VehicleID,output.VehicleName,output.ModelYear,output.color, output.Regno,output.Price, output.Seats,Number(output.BrandId),
            Number(output.FuelId),Number(output.TransmissionId),Number(output.VehicleTypeId),output.Description,output.updatedBy
        )
      
      return  Data 
  }
    
      catch(err){
console.log(err.message)
        return err

      }
}



const AddVehicleServicesGetImages= async(id)=>{
  return new Promise((resolve, reject) => {
  
    AddVehicleModel.AddVehicleModelGetImages(id)
      .then((Data)=>{
       
        resolve( Data) 
      })
      .catch((err)=>{
        reject (err)

      })
    })
}


const AddVehicleServicesGetByID= async(id)=>{
  return new Promise((resolve, reject) => {
  
    AddVehicleModel.AddVehicleModelGetByID(id)
      .then((Data)=>{
       
        resolve( Data) 
      })
      .catch((err)=>{
        reject (err)

      })
    })
}
const AddVehicleServicesData= async(output,files)=>{ 
   try{
          const  VehicleName = files.FrontImage[0].filename
          const VehiclePath = files.FrontImage[0].destination
          console.log(VehicleName,"selva",VehiclePath)
const nanoid = GenId(10)
const ShopId = output.ShopId
console.log(ShopId)
const Shop=  await AddVehicleModel.AddVehicleAreaByShopId(ShopId)
console.log(Shop)
        const shopData = await AddVehicleModel.AddVehicleModelData(nanoid,output.VehicleName,output.ModelYear,output.color, output.Regno,output.Price, output.Seats,output.Brand,
            output.FuelType,output.Transmission,output.VehicleType,output.Description,output.ShopId,
  output.createdBy,VehiclePath,VehicleName,Shop.Area_id
        )
      
          console.log(shopData)
       
        
    
        // const VehicleImage = pathWin.basename(I.VehicleImage);
        // const Vehiclepath = pathWin.dirname(output.VehicleImage);

        
        const Vehicle = await  AddVehicleModel.AddVehicleModelImgData(files.image,shopData,output.createdBy)
              .then((resulr)=>{
                console.log("sdf"+resulr)
              })
              .catch((err)=>{
                console.log("sdf"+err)
              })

        
        return {shopData,Vehicle,VehicleName};
    
    
   }
   catch(Err){
    console.log(Err)
    return Err
   }
   
}



module.exports={AddVehicleServicesData,AddVehicleServicesGet,AddVehicleServicesGetImages,AddVehicleServicesUpdateFrontImg,AddVehicleServicesGetByID,AddVehicleServicesUpdateInputFields,AddVehicleServicesUpdateDetailImg}