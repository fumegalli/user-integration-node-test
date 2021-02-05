const fs = require('fs');
const asyncPool = require('tiny-async-pool');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
}); ;

const UserService = require('./UserService');

const DB_FILE = 'src/database.json';
const dbUsers = [];
let poolLimit = 100;

async function getUserAddressAndSaveToDb(user) {
  const address = await UserService.getUserAddress(user.id);
  user.address = address;

  dbUsers.push(user);

  const stringfiedUser = JSON.stringify(dbUsers, null, 2);

  fs.writeFile(DB_FILE, stringfiedUser, (err) => {
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