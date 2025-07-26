  const dotEnv = require("dotenv") ;

dotEnv.config()

// console.log(process.env)

const db = {
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: Number(process.env.DATABASE_PORT),
};



module.exports=db;
