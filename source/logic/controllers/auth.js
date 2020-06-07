
const methods = require("../methods/auth");

module.exports = {
  async createAccount(req, res) {
    let result = await methods.create(req.body);
    res.sendStatus(result);
  },

  async login(req, res) {
    try {
      let result = await methods.login(req.body.email, req.body.password);
      res.status(result.code).json(result)
    } catch (error) {
      throw error;
    }
  }
}