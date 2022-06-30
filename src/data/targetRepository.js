import Task from '../models/TaskModel.js';
import  Student from "../models/StudentModel.js";
import Target from '../models/TargetModel.js';



const getStudentWithTarget = async (pStudent) => {
  return Target.findOne({
  where: {
    id: pStudent.id
  },
  // include:  Target
});

};

const getTargetList = async () => {
  
    return await Target.findAll(
      // include: Target
    );
    
  };

const createTarget = async (pTarget) => {
  try {
    return await Target.create(pTarget);
  } catch (error) {
    console.log(error);
  }
};

async function updateTarget(pId, pTarget) {
  try {
    let target = await Target.findByPk(pId);
    target.set({
      risale: pTarget.risale,
      pirlanta:pTarget.pirlanta,
      namaz:pTarget.namaz,
      cevsen:pTarget.cevsen,
      devamlilik:pTarget.devamlilik
    });
    return await target.save();
  } catch (error) {
    console.log(error);
  }
}

const deleteTarget = async (pId) => {
  try {
    await Target.destroy({
      where: {
        id: pId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export default {
  getStudentWithTarget,
  // isTaskExisting,
  getTargetList,
  createTarget,
  updateTarget,
  deleteTarget,
};
