
const cardDataGetServices = require("../../Service/UserAdminServices/UserCardDataServices")

const cardDataGetControlById=async(req,res)=>{
 try{
  console.log("asdasd")
    Id = req.params["id"]
    console.log(Id)
  const Data=await cardDataGetServices.cardDataGetServicesByID(Id)
  console.log(Data.Data,"asd",Data.images)
  res.send({CardData :Data.Data,ImgData :Data.images})
 }
 catch(err){
    console.log(err.message)
  res.send("Not Fetched")
 }  

}
const cardDataGetControl=async(req,res)=>{
 try{
  const Data=await cardDataGetServices.cardDataGetServices()
  if(Data){

  shuffle(Data.data)
  // console.log(Data.data,"asdfasdfasdfasdfas")
  res.send(Data.data)
  }

  // res.send(Data,"controllerget")
  // console.log(Data)
 }
 catch(err){
    console.log(err.message)
  res.send("Not Fetched")
 }
}

function shuffle(array){
  let i = array.length
   let j;
  let  temp;
  while (--i > 0) {
  j = Math.floor(Math.random () * (i+1));
  temp = array[j];
  array[j] = array[i];
  array[i] = temp;
  }
}


const LatestDateController = async(req,res)=>{
 try{
  const Data=await cardDataGetServices.LatestDateServices()
  // console.log(Data.data,"asd")
  res.send(Data.data)
 }
 catch(err){
    console.log(err.message)
  res.send("Not Fetched")
 }  

}
const SearchCardDataController= async(req,res)=>{
  try{
  const Data=await cardDataGetServices.SearchCardDataServices()
  res.send(Data)
 }
 catch(err){
    console.log(err.message)
  res.send("Not Fetched")
 }  
}

module.exports={cardDataGetControl,cardDataGetControlById,LatestDateController,SearchCardDataController}