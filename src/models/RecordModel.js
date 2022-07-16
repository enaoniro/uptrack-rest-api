import { Sequelize , DataTypes } from 'sequelize';
import Task from "./TaskModel.js";
// import sequelize from "../commons/sequelize.js"

const sequelize = new Sequelize('users', 'root', '50473524su', {
  host: 'localhost',
  dialect: 'mysql',
});



const Record = sequelize.define('Record', {
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
TaskId: {
  type: DataTypes.INTEGER,
  allowNull:true,
},

},
  {
    timestamps: false,
    createdAt: false
  });

  // Task.hasMany(Record);
  // Record.belongsTo(Task);
// Record.hasMany(Task)
// Task.belongsTo(Record)
//  Record.belongsToMany(Task, {'through': 'task_Record'});
//  Task.belongsToMany(Record, {'through': 'task_Record'});

await sequelize.sync({ alter: true });

 
export default Record