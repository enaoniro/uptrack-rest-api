import { Sequelize , DataTypes } from 'sequelize';
import Target from "./TargetModel.js";
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
    allowNull: false,
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

},
  {
    timestamps: false,
    createdAt: false
  });


// Target.hasMany(Task)
// Task.belongsTo(Target)
//  Target.belongsToMany(Task, {'through': 'task_target'});
//  Task.belongsToMany(Target, {'through': 'task_target'});

await sequelize.sync({ alter: true });

 
export default Task;