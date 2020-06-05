
const user = require("../../db/models/user");


module.exports = {
  async create(details) {
    let newUser = await user.create(details);
    if (newUser) {
      return 200;
    } else {
      return 400;
    }
  }
}