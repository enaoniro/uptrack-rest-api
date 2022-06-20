import Canton from '../models/CantonModel.js';
// import Task from "../models/TaskModel.js";


// export async function findByEmail(pEmail){
//   return await User.findOne(pEmail);
// }

// export async function isUserExisting(pEmail){
  
//   const emailCount = await User.count({
//       where: {email: pEmail}
//     });
//   return emailCount == 0 ? false : true;
    
// }

// const getUserWithRole = async (pEmail) => {
//   return User.findOne({
//   where: {
//     email: pEmail
//   },
//   include: Role
// });

//};

const getCantonList = async () => {
  try {
    return await Canton.findAll();
  } catch (error) {
    console.log(error);
  }
};




const createCanton = async (pCanton) => {
  try {
    return await Canton.create(pCanton);
  } catch (error) {
    console.log(error);
  }
};

async function updateCanton(pId, pCanton) {
  try {
    let canton = await Canton.findByPk(pId);
    canton.set({
      name: pCanton.name,
    });
    return await canton.save();
  } catch (error) {
    console.log(error);
  }
}

const deleteCanton = async (pId) => {
  try {
    await Canton.destroy({
      where: {
        id: pId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export default {
//   getCantonWithRole,
//   isCantonExisting,
  getCantonList,
  createCanton,
  updateCanton,
  deleteCanton,
};
  
