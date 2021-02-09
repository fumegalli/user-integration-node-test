require('dotenv').config();

const asyncPool = require('tiny-async-pool');

const { getPoolLimit } = require('./config/env');
const { createDatabase, saveUser } = require('./database');
const UserService = require('./services/UserService');

const poolLimit = getPoolLimit();

createDatabase();

async function getUserAddressAndSaveToDb(user) {
  const address = await UserService.getUserAddress(user.id);

  const newUser = { ...user, address };

  saveUser(newUser);
}

(async () => {
  const users = await UserService.getUsers();

  await asyncPool(poolLimit, users, getUserAddressAndSaveToDb);
})();
