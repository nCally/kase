
const methods = require("../methods/auth");

module.exports = {
  async createAccount(req, res) {
    let result = await methods.create(req.body);
    res.send(result);
  },

  login() { }
}