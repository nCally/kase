
const router = require("express").Router();
const controllers = require("../logic/controllers");

router.post("/register", controllers.auth.createAccount);
router.post("/authenticate", controllers.auth.login);

module.exports = router;