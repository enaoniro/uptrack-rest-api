import express from 'express';
import studentService from '../services/StudentService.js';
// import * as studentService from '../service/student-service.js';

const router = express.Router();



//tum studentlari isteyen frontend istegini alip student servisten bekle
router.get('/', async (req, res) => {
  const studentList = await studentService.getStudents();
  res.status(200).send(studentList);
});

router.get('/:groupId', async (req, res) => {
  const GroupId = req.params.groupId;
  const studentList = await studentService.getStudentsByGroup(GroupId);
  res.status(200).send(studentList);
});

router.post('/', async (req, res) => {
  let newStudent = req.body;
  let studentList = await studentService.getStudents();

  let existingstudent = studentList.findIndex((student) => student.email === newStudent.email);
  console.log(existingstudent);
  if (existingstudent === -1) {
      const addedstudent = await studentService.addStudent(newStudent);
  res.status(201).send(addedstudent);
  }
});
  
  export default router;

router.put('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const student = req.body;
  const updatedStudent = await studentService.updateStudent(id, student);
  res.status(200).send(updatedStudent);
});

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id);
  await studentService.deleteStudent(id);
  res.status(200).send('Deleted!');
});


