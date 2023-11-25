import "dotenv/config";
import { Sequelize, DataTypes, Model } from "sequelize";
import User from "../models/UserModel.js";
import Role from "../models/RoleModel.js";
import Record from "../models/RecordModel.js";
import Student from "../models/StudentModel.js";
import Target from "../models/TargetModel.js";
import Canton from "../models/CantonModel.js";
import Grup from "../models/GrupModel.js";
import Task from "../models/TaskModel.js";




const password = process.env.REACT_APP_PASSWORD;
const env = process.env.NODE_ENV || 'development';

// const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, password,{
//   host:process.env.DB_HOST,
//   dialect: "mysql",
  
// });
const dbUrl = "mysql://root:bCd5GEe-CDaECHfaEagd2bGHCd5Gf-3-@monorail.proxy.rlwy.net:17543/railway"
// const dbUrl = `mysql://${process.env.MYSQLUSER}:${process.env.MYSQL_ROOT_PASSWORD}@${process.env.RAILWAY_TCP_PROXY_DOMAIN}:${process.env.RAILWAY_TCP_PROXY_PORT}/${process.env.MYSQL_DATABASE}`

// const sequelize = new Sequelize("users", "root", password, {
//   host: "0.0.0.0",
//   dialect: "mysql",
// });

const sequelize = new Sequelize(dbUrl);

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await User.sync();
    await Role.sync();
    await Canton.sync();
    await Grup.sync();
    await Student.sync();
    await Task.sync();
    await Target.sync();
    await Record.sync();
    console.log("Connected to database!");
  } catch (err) {
    console.log(err);
  }
};
export default sequelize;
connectToDatabase();
