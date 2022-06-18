import { Sequelize , DataTypes } from 'sequelize';
//import Task from "./TaskModel.js";
// import sequelize from "../commons/sequelize.js"

const sequelize = new Sequelize('users', 'root', '50473524su', {
  host: 'localhost',
  dialect: 'mysql',
});



const Student = sequelize.define('Student', {
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

  }
},
  {
    timestamps: false,
    createdAt: false
  });

// Student.hasMany(Task);
// Task.belongsTo(Student);

await sequelize.sync({ alter: true });

 
export default Student;