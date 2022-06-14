import { Sequelize , DataTypes } from 'sequelize';
import Role from "./RoleModel.js";
// import sequelize from "../commons/sequelize.js"

const sequelize = new Sequelize('users', 'root', '50473524su', {
  host: 'localhost',
  dialect: 'mysql',
});



const User = sequelize.define('User', {
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
      allowNull:false,

  }
},
  {
    timestamps: false,
    createdAt: false
  });

Role.hasMany(User);
User.belongsTo(Role);

await sequelize.sync({ alter: true });

 
export default User;