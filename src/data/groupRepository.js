import Group from '../models/GroupModel.js';
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

const getGroupList = async () => {
  try {
    return await Group.findAll();
  } catch (error) {
    console.log(error);
  }
};




const createGroup = async (pGroup) => {
  try {
    return await Group.create(pGroup);
  } catch (error) {
    console.log(error);
  }
};

async function updateGroup(pId, pGroup) {
  try {
    let group = await Group.findByPk(pId);
    group.set({
      name: pGroup.name,
    });
    return await group.save();
  } catch (error) {
    console.log(error);
  }
}

const deleteGroup = async (pId) => {
  try {
    await Group.destroy({
      where: {
        id: pId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export default {
//   getGroupWithRole,
//   isGroupExisting,
  getGroupList,
  createGroup,
  updateGroup,
  deleteGroup,
};
  
