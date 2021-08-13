const router = require("express").Router();
const { Comment } = require("../../models");

router.post("/", (req, res) => {
  const newComment = Comment.create({
    ...req.body,
    userId: req.session.userId,
  });
  res.json(newComment);
});

module.exports = router;
