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

const sequelize = new Sequelize(`mysql://${process.env.MYSQLUSER}:${process.env.MYSQL_ROOT_PASSWORD}@${process.env.RAILWAY_TCP_PROXY_DOMAIN}:${process.env.RAILWAY_TCP_PROXY_PORT}/${process.env.MYSQL_DATABASE}`);


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
