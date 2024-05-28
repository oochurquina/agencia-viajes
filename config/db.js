import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

// const db = new Sequelize(process.env.DB_NAME,process.env.DB_USER,'',{
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     dialect:'mysql',
const db = new Sequelize(process.env.DB_URL,{
define:{
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;