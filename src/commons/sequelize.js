import { Sequelize, DataTypes, Model  } from 'sequelize';
import User from '../models/UserModel.js';
import Role from '../models/RoleModel.js';
import Student from '../models/StudentModel.js';
import Canton from '../models/CantonModel.js';
import Group from '../models/GroupModel.js';
import Task from '../models/TaskModel.js';
import Target from '../models/TargetModel.js';
// import Record from '../models/RecordModel.js';


const sequelize = new Sequelize('users', 'root', '50473524su', {
  host: 'localhost',
  dialect: 'mysql',
});


// const User = sequelize.define('User', {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull:false,
  
//     }
//   },
//     {
//       timestamps: false,
//       createdAt: false
//     });

    
// const Student = sequelize.define('Student', {
//     id: {type: DataTypes.INTEGER,
//           autoIncrement: true,
//           primaryKey: true},
    
//     first_name:{type: DataTypes.STRING,
//     last_name: DataTypes.STRING,
//     email:DataTypes.STRING,
//   }
// }); 

//   const Role = sequelize.define('Roles', {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
   
  
//   });

//   const Group = sequelize.define('Group', {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
    
//   },
//     {
//       timestamps: false,
//       createdAt: false
//     });

//     const Canton = sequelize.define('Canton', {
//         id: {
//           type: DataTypes.INTEGER,
//           autoIncrement: true,
//           primaryKey: true,
//         },
//         name: {
//           type: DataTypes.STRING,
//           allowNull: false,
//         },
       
//       },
//         {
//           timestamps: false,
//           createdAt: false
//         });
      

// const Task = sequelize.define('Task', {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     risale: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     pirlanta: {
//         type: DataTypes.STRING,
//         allowNull:false,
//     },
//     namaz: {
//       type: DataTypes.STRING,
//       allowNull:false,
//   },
//   cevsen: {
//       type: DataTypes.STRING,
//       allowNull:false,
//   },
//   devamlilik: {
//       type: DataTypes.STRING,
//       allowNull:false,
//   },
  
//   },
//     {
//       timestamps: false,
//       createdAt: false
//     });

    

// const Target = sequelize.define('Target', {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     risale: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     pirlanta: {
//         type: DataTypes.INTEGER,
//         allowNull:false,
//     },
//     namaz: {
//       type: DataTypes.INTEGER,
//       allowNull:false,
//   },
//   cevsen: {
//       type: DataTypes.INTEGER,
//       allowNull:false,
//   },
//   devamlilik: {
//       type: DataTypes.INTEGER,
//       allowNull:false,
//   },
  
//   },
//     {
//       timestamps: false,
//       createdAt: false
//     });

//     const Studenttasks = sequelize.define('Studenttasks', {
//         id: {
//           type: DataTypes.INTEGER,
//           primaryKey: true,
//           autoIncrement: true,
//           allowNull: false
//         },
//         selfGranted: DataTypes.BOOLEAN
//       }, { timestamps: false });
  
  


// // Target.hasMany(Task);
// // Task.belongsTo(Target);

// // User.hasOne(Role);
// // Role.belongsTo(User);

// Student.belongsToMany(Task, { through: Studenttasks });
// Task.belongsToMany(Student, { through: Studenttasks });
// Student.hasMany(Studenttasks);
// Studenttasks.belongsTo(Student);
// Task.hasMany(Studenttasks);
// Studenttasks.belongsTo(Task);

// Role.hasMany(User);
// User.belongsTo(Role);

// Task.hasMany(Student);
// Student.belongsTo(Task);



// // // All these work:
// // User.findAll({ include: Profile });
// // Profile.findAll({ include: User });
// // User.findAll({ include: Grant });
// // Profile.findAll({ include: Grant });
// // Grant.findAll({ include: User });
// // Grant.findAll({ include: Profile });

const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
        await User.sync();
        await Role.sync();
        await Student.sync();
        await Canton.sync();
        await Group.sync();
        await Task.sync();
        await Target.sync();
        // await Record.sync();
        console.log('Connected!');
    } catch (error) {
        console.log('Error');
    }
}
 export default sequelize
connectToDatabase();
