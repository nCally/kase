
const router = require("express").Router();
const middleware = require("../middleware");
const controllers = require("../logic/controllers");

router.post("/register", controllers.auth.createAccount);
router.post("/authenticate", controllers.auth.login);

router.get("/my-posts", middleware, controllers.post.posts);
router.post("/create-post", middleware, controllers.post.createPost);
router.delete("/delete-post", middleware, controllers.post.deletePost);



// router.post("/send-techub-mail", controllers.misc.sendemail);

module.exports = router;