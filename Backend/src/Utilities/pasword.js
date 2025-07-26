
const pass=(len)=>{
    const length = len;
    const Char = "0987654321abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let  passwords = "";
    for (var i = 0, n = Char.length; i < length; ++i) {
      passwords += Char.charAt(Math.floor(Math.random() * n));
}
return passwords



   
     

}


module.exports={
    pass
}
  