// import mongoose from 'mongoose';
import { Sequelize, DataTypes } from "sequelize";
import Grup from "./GrupModel.js";
import mongoose, { model } from 'mongoose';
// import sequelize from "../commons/sequelize.js"

const sequelize = new Sequelize("users", "root", "50473524su", {
  host: "localhost",
  dialect: "mysql",
});

// const cantonSchema = new mongoose.Schema({
//    name: {
//     type:String,
//     required:true
//    },
//    email: {
//     type:String,
//     required:true
//    }
// })

// model.exports = mongoose.Model("Canton, cantonSchema")

const Canton = sequelize.define(
  "Canton",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    createdAt: false,
  }
);

//    Canton.associate = (models) => {
//  Canton.hasMany(models.Grup, {
//    foreignKey: {
//      name: 'CantonId',
//      allowNull: false
//    },
//    as: 'grups'
//  });}
// Grup.belongsTo(Canton);
// Canton.hasMany(Grup);

await sequelize.sync({ alter: true });

export default Canton;
