function getDbPath() {
  const { DATABASE_FILE_NAME } = process.env;
  const PATH = `src/database/${DATABASE_FILE_NAME}`;

  if (DATABASE_FILE_NAME.endsWith('.json')) {
    return PATH;
  }

  return `${PATH}.json`;
}

function getPoolLimit() {
  const { POOL_LIMIT } = process.env;
  const poolLimitNumber = Number(POOL_LIMIT);

  if (!poolLimitNumber) {
    throw new Error('Pool limit must be a number');
  }

  return poolLimitNumber;
}

module.exports = { getDbPath, getPoolLimit };
