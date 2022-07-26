const { Router } = require("express");
const router = Router();

const addTodoGroup = require("../controllers/group/addTodoGroup");
const deleteTodoGroup = require("../controllers/group/deleteTodoGroup");

const isAuth = require("../midlevare/isAuth");

router.delete("/:id", isAuth, async (req, res) => {
  deleteTodoGroup(req, res, req.params.id);
});

router.post("/", isAuth, (req, res) => {
  addTodoGroup(req, res);
});

module.exports = router;
