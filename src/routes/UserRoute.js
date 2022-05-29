import express from 'express';
import userService from '../services/UserService.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const userList = await userService.getUsers();
  res.status(200).send(userList);
});

router.post('/', async (req, res) => {
  let newUser = req.body;
  // let userList = await userService.getUsers();

  // let userCheck = userList.findIndex((user) => user.email === newUser.email);
  // console.log(userCheck);
  // if (userCheck === -1) {
      const addedUser = await userService.addUser(newUser);
  res.status(201).send(addedUser);
  
});

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

export default router;
