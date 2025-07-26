const dataconnect = require("../../DataBaseConnection");

const AddVehicleModelGet = (id) => {
  return new Promise((resolve, reject) => {
    dataconnect.query(
      `SELECT     vehicle_tbl.id AS vehicle_id,
      vehicle_tbl.name AS vehicle_name,
      vehicle_tbl.model AS model,
      vehicle_tbl.color AS color,
      vehicle_tbl.registration_no AS RegNO,
      vehicle_tbl.price AS price,
      vehicle_tbl.seats AS seats,
      vehicle_tbl.Description As Description,
      vehicle_tbl.brand_id AS BrandId,
      vehicle_tbl.fuel_id AS FuelId,
      vehicle_tbl.transmission_id AS TransmissionId,
      vehicle_tbl.category_id AS VehicleTypeId,

      categories_tbl.name AS Vehicletype,
      
      Vehicle_img_name AS Img,
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
               
                where 
                vehicle_tbl.rentalShop_id =? 
                `,
      [id],
      (err, result) => {
        if (err) {
          // console.log(err.message);
          return reject(err);
        } else {
          // console.log(result);
          return resolve(result);
        }
      }
    );
  });
};

const AddVehicleModelGetImages = (id) => {
  return new Promise((resolve, reject) => {
    dataconnect.query(
      `SELECT 
  vehicle_image_tbl.id,
  vehicle_image_tbl.image_name 

  From 
vehicle_image_tbl

  JOIN 
  vehicle_tbl
  ON
  vehicle_tbl.id =vehicle_image_tbl.vehicle_id 
  
 
 
 WHERE vehicle_image_tbl.vehicle_id  = ?
  `,
      [id],
      (err, result) => {
        if (err) {
          // console.log(err.message);
          return reject(err);
        } else {
          // console.log(result);
          return resolve(result);
        }
      }
    );
  });
};

const AddVehicleModelGetByID=(id)=>{
   return new Promise((resolve, reject) => {
    dataconnect.query(
      `SELECT     vehicle_tbl.id AS vehicle_id,
      vehicle_tbl.name AS vehicle_name,
      vehicle_tbl.model AS model,
      vehicle_tbl.color AS color,
      vehicle_tbl.registration_no AS RegNO,
      vehicle_tbl.price AS price,
      vehicle_tbl.seats AS seats,
      vehicle_tbl.Description As Description,
      vehicle_tbl.brand_id AS BrandId,
      vehicle_tbl.fuel_id AS FuelId,
      vehicle_tbl.transmission_id AS TransmissionId,
      vehicle_tbl.category_id AS VehicleTypeId,

      categories_tbl.name AS Vehicletype,
      
      Vehicle_img_name AS Img,
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
               
                where 
                vehicle_tbl.id =? 
                `,
      [id],
      (err, result) => {
        if (err) {
          // console.log(err.message);
          return reject(err);
        } else {
          // console.log(result);
          return resolve(result);
        }
      }
    );
  });

}

const AddVehicleAreaByShopId=(id)=>{

      return new Promise((resolve, reject) => {
  
  
          const query = `Select Area_id from rental_shop_tbl where id =?  `;
        
  
          dataconnect.query(query, [id], (error,results) => {
              if (error) {
                  console.log("Database error:r " + error.message)
  
  
                  return reject("Database error: " + error.message);
              }
              console.log(results)
              resolve(results[0]);
          });
      });
}

const AddVehicleModelUpdateInputFields=(

        ID,
       VehicleName ,
        ModelYear ,
        color ,
        Regno ,
        Price ,
        Seats ,
        BrandId ,
        FuelId ,
        TransmissionId ,
        VehicleTypeId ,
        Description,
        updatedBy ,
)=>{
  
  // console.log(output[0].Description,"model")
  // console.log(output.map((items)=>items),"noo")
  console.log(ID,
       VehicleName ,
        ModelYear ,
        color ,
        Regno ,
        Price ,
        Seats ,
        BrandId ,
        FuelId ,
        TransmissionId ,
        VehicleTypeId ,
        Description,
        updatedBy +"----------------------------------------------------------------------------------------------------------------------------------------")

     return new Promise((resolve, reject) => {

      // output.map((items)=>{
        dataconnect.query(
      `UPDATE vehicle_tbl SET name= COALESCE(? , name) ,model=COALESCE(? , model),color= COALESCE(? , color),registration_no=COALESCE(?,registration_no),price=COALESCE(?,price),
      seats= COALESCE(? , seats),brand_id= COALESCE(?,brand_id),
  fuel_id = COALESCE(?,fuel_id),transmission_id=COALESCE(?,transmission_id) ,category_id=COALESCE(?,category_id),Description= COALESCE(?,Description),
  updatedBy =COALESCE(?,updatedBy)
  
          
          
          where id= ?`,
      [
        VehicleName,
        ModelYear ,
        color,
        Regno ,
        Price ,
        Seats,
        BrandId ,
        FuelId ,
        TransmissionId ,
        VehicleTypeId ,
        Description ,
        updatedBy ,
      
       ID
        // id,
      ],
      (err, result) => {
        if (err) {
          console.log(err.message)
          return reject(err);
        } else {
          console.log(result)
          return resolve(result);
        }
      }
    );

      })
    
  // });

}
const AddVehicleModelFrontImg = (
  id,
  Vehicle_img_path,
  Vehicle_img_name,
  updatedBy
) => {
  console.log( id,
  Vehicle_img_path,
  Vehicle_img_name,
  updatedBy,"noo")

  return new Promise((resolve, reject) => {
    dataconnect.query(
      `UPDATE vehicle_tbl SET Vehicle_img_path=?,Vehicle_img_name=?,updatedBy = ?
          
          
          where id=?`,
      [
        
        Vehicle_img_path,
        Vehicle_img_name,
        updatedBy,
        id,
      ],
      (err, result) => {
        if (err) {
          console.log(err.message)
          return reject(err);
        } else {
          console.log(result)
          return resolve(result);
        }
      }
    );
  });
};
const AddVehicleModelUpdateDetailImg = (Name, id, vehicleId) => {
  const imgNames = Name.map((imgName, index) => {
    const imgId = id[index];

    const query = `
      UPDATE vehicle_image_tbl 
      SET image_name = ? 
      WHERE id = ? AND vehicle_id = ?
    `;

    return new Promise((resolve, reject) => {
      dataconnect.query(query, [imgName, imgId, vehicleId], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result); 
        }
      });
    });
  });

  if (imgNames.length === 1) {
    return imgNames[0];
  }

  return Promise.all(imgNames)
    .then((results) => {
      return results; 
    })
    .catch((err) => {
      throw err; 
    });
};





const AddVehicleModelImgData = (output, Vechileid, createdBy) => {
  const values = output.map((img) => [
    img.destination,
    img.filename,
    Vechileid,
    createdBy,
  ]);
  console.log(values, "MODELS");
  return new Promise((resolve, reject) => {
    // console.log(name,path,"MODEL")
    const query = `INSERT INTO vehicle_image_tbl (image_path,image_name,vehicle_id,createdBy) VALUES ?`;

    dataconnect.query(query, [values], (error, results) => {
      if (error) {
        console.log("Database errorsss: " + error.message);

        return reject("Database error: " + error.message);
      }
      resolve(results);
    });
  });
};
const AddVehicleModelData = (
  id,
  VehicleName,
  ModelYear,
  color,
  Regno,
  Price,
  Seats,
  Brand,
  FuelType,
  Transmission,
  VehicleType,
  Description,
  ShopId,
  createdBy,
  Vehicle_img_path,
  Vehicle_img_name,
  Shop
  
) => {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO vehicle_tbl (id,name,model,color,registration_no,price,seats,brand_id,fuel_id,transmission_id,category_id,Description,rentalShop_id,createdBy,Vehicle_img_path,Vehicle_img_name,Area_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

    dataconnect.query(
      query,
      [
        id,
        VehicleName,
        ModelYear,
        color,
        Regno,
        Price,
        Seats,
        Brand,
        FuelType,
        Transmission,
        VehicleType,
        Description,

        ShopId,
        createdBy,
        Vehicle_img_path,
        Vehicle_img_name,
        Shop
      ],
      (error, results) => {
        if (error) {
          console.log("Database error: " + error.message);

          return reject("Database error: " + error.message);
        }
        console.log(id, "RSULTS");
        resolve(id);
      }
    );
  });
};

module.exports = {
  AddVehicleModelImgData,
  AddVehicleModelData,
  AddVehicleModelGet,
  AddVehicleModelGetImages,
  AddVehicleModelFrontImg,
  AddVehicleModelUpdateInputFields,
  AddVehicleModelUpdateDetailImg,
  AddVehicleModelGetByID
,AddVehicleAreaByShopId};
