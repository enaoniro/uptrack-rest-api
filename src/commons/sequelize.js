import { Sequelize  } from 'sequelize';
import User from '../models/UserModel.js';
import Role from '../models/RoleModel.js';
import Student from '../models/StudentModel.js';
import Canton from '../models/CantonModel.js';
import Group from '../models/GroupModel.js';
// import Branch from '../models/BranchModel.js';

const sequelize = new Sequelize('users', 'root', '50473524su', {
  host: 'localhost',
  dialect: 'mysql',
});


// User.hasOne(Role);
// Role.belongsTo(User);

const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
        await User.sync();
        await Role.sync();
        await Student.sync();
        await Canton.sync();
        await Group.sync();
        console.log('Connected!');
    } catch (error) {
        console.log('Error');
    }
}
 export default sequelize
connectToDatabase();
