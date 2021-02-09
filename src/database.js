const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const { getDbPath } = require('./config/env');

const path = getDbPath();

const adapter = new FileSync(path);

const db = low(adapter);

function createDatabase() {
  db.defaults({ users: [] })
    .write();
}

function saveUser(user) {
  db.get('users')
    .push(user)
    .write();

  console.log(`User ${user.id} saved on database!`);
}

module.exports = { createDatabase, saveUser };
