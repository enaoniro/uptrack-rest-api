import userRepository from '../data/UserRepository.js';

const getUsers = async () => {
  const userList = await userRepository.getUserList();
  return userList;
};

const addUser = async (pUser) => {
  return await userRepository.createUser(pUser);
};

const updateUser = async (pId, pUser) => {
  return await userRepository.updateUser(pId, pUser);
};

const deleteUser = async (pId) => {
  await userRepository.deleteUser(pId);
};

export default {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
};
