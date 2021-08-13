const router = require("express").Router();
const commentData = require("./commentData");
const postData = require("./postData");
const userData = require("./userData");


router.use("/comment", commentData);
router.use("/post", postData);
router.use("/users", userData);

module.exports = router;