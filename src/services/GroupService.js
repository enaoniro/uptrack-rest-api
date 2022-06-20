import groupRepository from '../data/groupRepository.js';
// import Group from '../models/GroupModel.js';

//auth0 dan gelen pStudenti alip Student repoda var mi yok mu sorgulamasi yapip varsa geriye 
// const checkStudent = async (pStudent) => {
//   // find Student object by email in the database
//   // if the Student is existing in the db then allow the Student to log in (send role info back to the react)
//   // if the Student is not existing then create the Student in the db
//   const isStudentExisting = await groupRepository.isStudentExisting(pStudent.email)
//   if(isStudentExisting){  

//     return groupRepository.getStudentWithRole(pStudent.email);
    
              
//    };
 
  
// }


// const getStudentByEmail = async (pEmail) => {

//   const StudentInDatabase = await groupRepository.getStudentByEmail(pEmail)
//   return StudentInDatabase;
// }


const getGroups = async () => {
  const groupList = await groupRepository.getGroupList();
  return groupList;
};

const addGroup = async (pGroup) => {
  return await groupRepository.createGroup(pGroup);
};

const updateGroup = async (pId, pGroup) => {
  return await groupRepository.updateGroup(pId, pGroup);
};

const deleteGroup = async (pId) => {
  await groupRepository.deleteGroup(pId);
};

export default {
//   getGroupByEmail,
//   checkGroup,
  getGroups,
  addGroup,
  updateGroup,
  deleteGroup
}
