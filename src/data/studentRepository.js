import Student from '../models/StudentModel.js';
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

const getStudentList = async () => {
  try {
    return await Student.findAll();
  } catch (error) {
    console.log(error);
  }
};




const createStudent = async (pStudent) => {
  try {
    return await Student.create(pStudent);
  } catch (error) {
    console.log(error);
  }
};

async function updateStudent(pId, pStudent) {
  try {
    let student = await Student.findByPk(pId);
    student.set({
      name: pStudent.name,
    });
    return await student.save();
  } catch (error) {
    console.log(error);
  }
}

const deleteStudent = async (pId) => {
  try {
    await Student.destroy({
      where: {
        id: pId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export default {
//   getStudentWithRole,
//   isStudentExisting,
  getStudentList,
  createStudent,
  updateStudent,
  deleteStudent,
};
  
