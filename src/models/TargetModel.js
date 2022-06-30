import { Sequelize , DataTypes } from 'sequelize';
import Task from "./TaskModel.js";
// import sequelize from "../commons/sequelize.js"

const sequelize = new Sequelize('users', 'root', '50473524su', {
  host: 'localhost',
  dialect: 'mysql',
});



const Target = sequelize.define('Target', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  risale: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pirlanta: {
      type: DataTypes.INTEGER,
      allowNull:false,
  },
  namaz: {
    type: DataTypes.INTEGER,
    allowNull:false,
},
cevsen: {
    type: DataTypes.INTEGER,
    allowNull:false,
},
devamlilik: {
    type: DataTypes.INTEGER,
    allowNull:false,
},

},
  {
    timestamps: false,
    createdAt: false
  });


 

await sequelize.sync({ alter: true });

 
export default Target;