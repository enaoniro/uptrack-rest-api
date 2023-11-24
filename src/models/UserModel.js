import mongoose, { model } from 'mongoose';
import { Sequelize , DataTypes } from 'sequelize';
import Role from "./RoleModel.js";
// import sequelize from "../commons/sequelize.js"

const sequelize = new Sequelize('users', 'root', '50473524su', {
  host: 'localhost',
  dialect: 'mysql',
});

// const userSchema = new mongoose.Schema({
//    username: {
//     type:String,
//     required:true
//    },
//    email: {
//     type:String,
//     required:true
//    },
//    roles: {
//     type:String,
//     required:true
//    },
//    active: {
//     type:Boolean,
//     default:true
//    },
// })

// model.exports = mongoose.Model("User, userSchema")

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
      type: DataTypes.STRING,
      allowNull:false,
  },
  RoleId: {
    type: DataTypes.INTEGER,
    allowNull:false,
  }
},
  {
    timestamps: false
  });

Role.hasMany(User);
User.belongsTo(Role);

await sequelize.sync({ alter: true });

 
export default User;