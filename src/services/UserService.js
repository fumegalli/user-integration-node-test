const Axios = require('axios');

const { BASE_URL } = process.env;

const axios = Axios.create({
  baseURL: BASE_URL,
});

module.exports = class UserService {
  static async getUsers() {
    try {
      console.log('Getting users...');

      const { data } = await axios.get();

      return data;
    } catch (err) {
      console.error('Fail to get users: ', err.message);
      return UserService.getUsers();
    }
  }

  static async getUserAddress(userId) {
    try {
      console.log(`Getting user ${userId} address...`);

      const { data } = await axios.get(`/${userId}/address`);

      return data;
    } catch (err) {
      if (err.response && err.response.status === 404) {
        return {};
      }

      return UserService.getUserAddress(userId);
    }
  }
};
