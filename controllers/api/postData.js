const router = require("express").Router();
const { Post } = require("../../models");

router.post("/", (req, res) => {
  const newPost = Post.create({
    ...req.body,
    userId: req.session.userId,
  });
  res.json(newPost);
});

router.put("/:id", (req, res) => {
  const [affectedRows] = Post.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  if (affectedRows > 0) res.status(200).end();
  else res.status(404).end();
});

router.delete("/:id", (req, res) => {
  const [affectedRows] = Post.destroy({
    where: {
      id: req.params.id,
    },
  });
  if (affectedRows > 0) res.status(200).end();
  else res.status(404).end();
});

module.exports = router;
