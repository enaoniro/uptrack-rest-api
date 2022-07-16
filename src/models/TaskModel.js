import { Sequelize , DataTypes } from 'sequelize';
import Target from "./TargetModel.js";
import Student from "./StudentModel.js";
import Record from './RecordModel.js';
// import sequelize from "../commons/sequelize.js"

const sequelize = new Sequelize('users', 'root', '50473524su', {
  host: 'localhost',
  dialect: 'mysql',
});



const Task = sequelize.define('Task', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  risale: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pirlanta: {
      type: DataTypes.STRING,
      allowNull:false,
  },
  namaz: {
    type: DataTypes.STRING,
    allowNull:true,
},
cevsen: {
    type: DataTypes.STRING,
    allowNull:true,
},
devamlilik: {
    type: DataTypes.STRING,
    allowNull:true,
},
StudentId: {
  type: DataTypes.INTEGER,
  allowNull:true,
},

},
  {
    timestamps: false,
    createdAt: false
  });

  

// Student.hasMany(Task)
// Task.belongsTo(Student)
Task.hasMany(Target);
Target.belongsTo(Task);
Task.hasMany(Record);
Record.belongsTo(Task);
//  Target.belongsToMany(Task, {'through': 'task_target'});
//  Task.belongsToMany(Target, {'through': 'task_target'});

await sequelize.sync({ alter: true });

 
export default Task;