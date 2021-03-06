import Task from "../models/TaskModel.js";
import Student from "../models/StudentModel.js";
import Target from "../models/TargetModel.js";
import Record from "../models/RecordModel.js";

const getStudentWithTask = async (pId) => {
  return await Task.findAll({
    where: {
      StudentId: pId,
    },
  
  });
};

const getTaskList = async () => {
  return await Task.findAll({
    include:[Target, Record]
  });
};

const createTask = async (pTask) => {
  try {
    return await Task.create(pTask);
  } catch (error) {
    console.log(error);
  }
};

async function updateTask(pId, pTask) {
  try {
    let task = await Task.findByPk(pId);
    task.set({
      risale: pTask.risale,
      pirlanta: pTask.pirlanta,
      namaz: pTask.namaz,
      cevsen: pTask.cevsen,
      devamlilik: pTask.devamlilik,
    });
    return await task.save();
  } catch (error) {
    console.log(error);
  }
}

const deleteTask = async (pId) => {
  try {
    await Task.destroy({
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
  // isTaskExisting,
  getTaskList,
  createTask,
  updateTask,
  deleteTask,
};
