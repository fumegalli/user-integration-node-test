require('dotenv').config();

const fs = require('fs');
const asyncPool = require('tiny-async-pool');

const UserService = require('./UserService');
const { getDbFileName, getPoolLimit } = require('./config');

const dbFileName = getDbFileName();
const poolLimit = getPoolLimit();
const dbUsers = [];

async function getUserAddressAndSaveToDb(user) {
  const address = await UserService.getUserAddress(user.id);
  user.address = address;

  dbUsers.push(user);

  const stringfiedUsers = JSON.stringify(dbUsers);

  fs.writeFile(`src/database/${dbFileName}`, stringfiedUsers, (err) => {
    if (err) {
      throw err;
    }

    console.log(`User ${user.id} saved on database!`);
  });
}

(async () => {
  const users = await UserService.getUsers();

  await asyncPool(poolLimit, users, getUserAddressAndSaveToDb);
})();