require('dotenv').config();

const fs = require('fs');
const asyncPool = require('tiny-async-pool');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
}); ;

const UserService = require('./UserService');

const { DATABASE_FILE_NAME } = process.env;
const dbUsers = [];
let poolLimit = 100;

async function getUserAddressAndSaveToDb(user) {
  const address = await UserService.getUserAddress(user.id);
  user.address = address;

  dbUsers.push(user);

  const stringfiedUsers = JSON.stringify(dbUsers);

  fs.writeFile(`src/database/${DATABASE_FILE_NAME}`, stringfiedUsers, (err) => {
    if (err) {
      throw err;
    }

    console.log(`User ${user.id} saved on database!`);
  });
}

async function run() {
  const users = await UserService.getUsers();

  await asyncPool(poolLimit, users, getUserAddressAndSaveToDb);
}

readline.question('Set the pool limit: (default 100)\n', response => {
  poolLimit = response;
  readline.close();

  run();
});