
const dataconnect = require("../../DataBaseConnection");

const SearchCardDataGet=()=>{
    return new Promise((resolve, reject) => {
    dataconnect.query(`SELECT id,Area_name from Area_tbl`,[],(err, result) => {
        if (err) {
          console.log(err.message,"bnj");
          return reject(err);
        } else {
          console.log(result,"h");
          return resolve(result,"model");
        }
      })
    })
}


const cardDataGetModelByID =(id)=>{
  return new Promise((resolve, reject) => {
    // dataconnect.query(`SELECT image_name,image_path,id from vehicle_image_tbl where vehicle_id =?`,[id],(err, result) => {
    dataconnect.query(

      `SELECT  vehicle_tbl.id AS vehicle_id,
      vehicle_tbl.name AS vehicle_name,
      vehicle_tbl.model AS model,
      vehicle_tbl.color AS color,
      vehicle_tbl.registration_no AS RegNO,
      vehicle_tbl.price AS price,
      vehicle_tbl.seats AS seats,
      vehicle_tbl.Vehicle_img_name AS VehImg,
      vehicle_tbl.Description AS Description,
      categories_tbl.name AS Vechiletype,
      brand_tbl.name AS brand,
      fuel_type_tbl.name AS fuel,
      transmission_tbl.name As transmission,
      vehicle_image_tbl.image_name,
      vehicle_image_tbl.image_path,
      vehicle_image_tbl.id
  
                FROM 
                vehicle_tbl 
              LEFT JOIN 
              categories_tbl
                ON 
                categories_tbl.id = vehicle_tbl.category_id
                LEFT JOIN
                    brand_tbl 
                    ON
                    brand_tbl.id = vehicle_tbl.brand_id

                LEFT JOIN
                fuel_type_tbl
                  ON
                  fuel_type_tbl.id =vehicle_tbl.fuel_id
                LEFT JOIN 
                   transmission_tbl
                ON  
                transmission_tbl.id = vehicle_tbl.transmission_id
                
                LEFT JOIN
                vehicle_image_tbl
                ON
                vehicle_image_tbl.vehicle_id = vehicle_tbl.id
                  WHERE             vehicle_id = ?`

,[id],(err, result) => {
        if (err) {
          console.log(err.message,"bnj");
          return reject(err);
        } else {
          return resolve(result);
        }
      })
    })
}

const LatestDataModel =(date)=>{
  const value = date.map(()=>'?').join(',')
   return new Promise((resolve, reject) => {
    dataconnect.query(`SELECT  vehicle_tbl.id AS vehicle_id,
      vehicle_tbl.name AS vehicle_name,
      vehicle_tbl.model AS model,
      vehicle_tbl.color AS color,
      vehicle_tbl.registration_no AS RegNO,
      vehicle_tbl.price AS price,
      vehicle_tbl.seats AS seats,
      vehicle_tbl.Vehicle_img_name AS VehImg,
      categories_tbl.name AS Vechiletype,
      brand_tbl.name AS brand,
      fuel_type_tbl.name AS fuel,
      transmission_tbl.name As transmission
  
                FROM 
                vehicle_tbl 
              LEFT JOIN 
              categories_tbl
                ON 
                categories_tbl.id = vehicle_tbl.category_id
                LEFT JOIN
                    brand_tbl 
                    ON
                    brand_tbl.id = vehicle_tbl.brand_id

                LEFT JOIN
                fuel_type_tbl
                  ON
                  fuel_type_tbl.id =vehicle_tbl.fuel_id
                LEFT JOIN 
                   transmission_tbl
                ON  
                transmission_tbl.id = vehicle_tbl.transmission_id

                Where  model IN (${value})`
                
                ,date,(err, result) => {
        if (err) {
          console.log(err.message,"bnj");
          return reject(err);
        } else {
          console.log(result,"h");
          return resolve(result,"model");
        }
      })
    })
  }
const cardDataGetModel = ()=>{
  return new Promise((resolve, reject) => {
    dataconnect.query(`SELECT  vehicle_tbl.id AS vehicle_id,
      vehicle_tbl.name AS vehicle_name,
      vehicle_tbl.model AS model,
      vehicle_tbl.color AS color,
      vehicle_tbl.registration_no AS RegNO,
      vehicle_tbl.price AS price,
      vehicle_tbl.seats AS seats,
      vehicle_tbl.Vehicle_img_name AS VehImg,
      categories_tbl.name AS Vechiletype,
      brand_tbl.name AS brand,
      fuel_type_tbl.name AS fuel,
      transmission_tbl.name As transmission
  
                FROM 
                vehicle_tbl 
              LEFT JOIN 
              categories_tbl
                ON 
                categories_tbl.id = vehicle_tbl.category_id
                LEFT JOIN
                    brand_tbl 
                    ON
                    brand_tbl.id = vehicle_tbl.brand_id

                LEFT JOIN
                fuel_type_tbl
                  ON
                  fuel_type_tbl.id =vehicle_tbl.fuel_id
                LEFT JOIN 
                   transmission_tbl
                ON  
                transmission_tbl.id = vehicle_tbl.transmission_id`,[],(err, result) => {
        if (err) {
          console.log(err.message,"bnj");
          return reject(err);
        } else {
          console.log(result,"h");
          return resolve(result,"model");
        }
      })
    })
}
module.exports={cardDataGetModel,cardDataGetModelByID,LatestDataModel,SearchCardDataGet}