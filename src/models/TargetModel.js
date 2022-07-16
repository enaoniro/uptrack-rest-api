import { Sequelize , DataTypes } from 'sequelize';
import Task from './TaskModel.js';


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
TaskId: {
  type: DataTypes.INTEGER,
  allowNull:true,
},

},
  {
    timestamps: false,
    createdAt: false
  });

  // Task.hasMany(Target);
  // Target.belongsTo(Task);
 

await sequelize.sync({ alter: true });

 
export default Target;