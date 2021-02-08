function getDbFileName() {
  const { DATABASE_FILE_NAME } = process.env;

  if (DATABASE_FILE_NAME.endsWith('.json')) {
    return DATABASE_FILE_NAME;
  }

  return `${DATABASE_FILE_NAME}.json`
}

function getPoolLimit() {
  const { POOL_LIMIT } = process.env;
  const poolLimitNumber = Number(POOL_LIMIT);

  if (!poolLimitNumber) {
    throw new Error('Pool limit must be a number');
  }

  return poolLimitNumber;
}

module.exports = { getDbFileName, getPoolLimit }