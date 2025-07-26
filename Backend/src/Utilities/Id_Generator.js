


const  GenId=(num)=>{
 let sol =""
    let id = " 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
   
    for(let i=0;i<num;i++){
        sol += id[Math.floor(Math.random() * id.length)];
        
    }
    return sol;
}

module.exports ={GenId}