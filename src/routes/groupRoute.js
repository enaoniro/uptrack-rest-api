import express from 'express';
import groupService from '../services/GroupService.js';
// import * as groupService from '../service/student-service.js';

const router = express.Router();



//tum studentlari isteyen frontend istegini alip student servisten bekle
router.get('/', async (req, res) => {
  const groupList = await groupService.getGroups();
  res.status(200).send(groupList);
});

// router.post('/', async (req, res) => {
//   let newGroup = req.body;
//   let groupList = await groupService.getGroups();

//   let existinggroup = groupList.findIndex((group) => group.email === newGroup.email);
//   console.log(existinggroup);
//   if (existinggroup === -1) {
//       const addedgroup = await groupService.addGroup(newGroup);
//   res.status(201).send(addedgroup);
//   }
// });

router.post('/', async (req, res) => {
  let newGroup = req.body;
  const addedgroup = await groupService.addGroup(newGroup);
  res.status(201).send(addedgroup);
});
  
  export default router;

// router.put('/:id', async (req, res) => {
//   const id = Number(req.params.id);
//   const company = req.body;
//   const updatedCompany = await companyService.updateCompany(id, company);
//   res.status(200).send(updatedCompany);
// });

// router.delete('/:id', async (req, res) => {
//   const id = Number(req.params.id);
//   await companyService.deleteCompany(id);
//   res.status(200).send('Deleted!');
// });


