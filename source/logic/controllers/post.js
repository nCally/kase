
const methods = require("../methods/post");


module.exports = {

  async createPost(req, res) {

    try {

      let response = await methods.create(res.auth_user, req.body);
      res.status(response.code).json(response);

    } catch (error) {
      throw error;
    }

  },

  async deletePost(req, res) {

    try {

      let response = await methods.delete(res.auth_user, req.query.postId);
      res.status(response.code).json(response);

    } catch (error) {
      throw error;
    }

  },

  async posts(req, res) {

    try {

      let response = await methods.postsByUser(res.auth_user);
      res.status(200).json(response);

    } catch (error) {
      throw error;
    }

  }

}