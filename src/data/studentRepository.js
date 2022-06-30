import Student from '../models/StudentModel.js';
import Task from "../models/TaskModel.js";
import Target from "../models/TargetModel.js";


// export async function findByEmail(pEmail){
//   return await User.findOne(pEmail);
// }

// export async function isUserExisting(pEmail){
  
//   const emailCount = await User.count({
//       where: {email: pEmail}
//     });
//   return emailCount == 0 ? false : true;
    
// }

const getStudentWithTask = async (pId) => {
  return Student.findOne({
  where: {
    id: pId
  },
  include: [Task]
});

};

const getStudentList = async () => {
  
    return await Student.findAll({
      include: [Task, Target]

    });
 
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
      first_name: pStudent.first_name,
      last_name: pStudent.last_name,
      email: pStudent.email,
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
 getStudentWithTask,
//   isStudentExisting,
  getStudentList,
  createStudent,
  updateStudent,
  deleteStudent,
};
  
