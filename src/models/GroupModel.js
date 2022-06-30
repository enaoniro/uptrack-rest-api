import { Sequelize , DataTypes } from 'sequelize';
import Canton from './CantonModel.js';
import Student from "./StudentModel.js";
// import sequelize from "../commons/sequelize.js"

const sequelize = new Sequelize('users', 'root', '50473524su', {
  host: 'localhost',
  dialect: 'mysql',
});



const Group = sequelize.define('Group', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
},
  {
    timestamps: false,
    createdAt: false
  });

Group.belongsTo(Canton);


await sequelize.sync({ alter: true });

 
export default Group;