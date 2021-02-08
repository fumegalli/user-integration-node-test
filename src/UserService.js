const axios = require('axios');
const { BASE_URL } = process.env;

module.exports = class UserService {
  static async getUsers() {
    try {
      console.log('Getting users...');

      const { data } = await axios.get(BASE_URL);
  
      return data;
    } catch (err) {
      console.error('Fail to get users: ', err.message);
      return UserService.getUsers();
    }
  }

  static async getUserAddress(userId) {
    try {
      console.log(`Getting user ${userId} address...`);

      const { data } = await axios.get(`${BASE_URL}/${userId}/address`)

      return data;
    } catch (err) {
      if (err.response && err.response.status === 404) {
        return {};
      }

      return UserService.getUserAddress(userId);
    }
  }
}