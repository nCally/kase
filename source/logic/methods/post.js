
const Post = require("../../db/models/post");

module.exports = {

  async create(user, dt) {

    try {

      console.log(user, " should be the user id")

      let createRes = await Post.create({
        ...dt,
        UserId: user
      });

      if (createRes) { return { code: 200, msg: "created" }; }

    } catch (error) {
      return { code: 501, msg: error };
    }

  },

  async postsByUser(user) {

    try {

      const posts = await Post.findAll({
        where: { UserId: user }
      })

      return posts;

    } catch (error) {
      throw error;
    }

  },

  async postsInUserTimeline() { },

  async delete(userId, postId) {

    try {

      let post = await Post.findByPk(postId);

      post = post.get({ plain: true });
      post.deleted = true;
      const completed = await post.save();

      if (completed) {
        return {
          code: 200,
          msg: "post deleted"
        }
      }

    } catch (error) {
      return {
        code: 501,
        msg: error
      };
    }

  },

}