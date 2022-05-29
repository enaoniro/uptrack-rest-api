import { Sequelize } from 'sequelize';
// import User from '../models/UserModel.js';
// import Company from '../models/CompanyModel.js';
// import Branch from '../models/BranchModel.js';

const sequelize = new Sequelize('users', 'root', '50473524su', {
  host: 'localhost',
  dialect: 'mysql',
});

// Company.hasMany(Branch);
// Branch.belongsTo(Company);

async function connectToDatabase() {
    try {
        await sequelize.authenticate();
        //  await User.sync();
        // await Branch.sync();
        console.log('Connected!');
    } catch (error) {
        console.log('Error');
    }
}

connectToDatabase();
export default sequelize;