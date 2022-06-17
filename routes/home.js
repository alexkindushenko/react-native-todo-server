const { Router } = require("express");
const router = Router();

const sendTodoList = require("../controllers/sendTodoList");
const addTodoItem = require("../controllers/addTodoItem");

router.patch("/", async (req, res) => {
  sendTodoList(req, res);
});
router.post("/", async (req, res) => {
  // console.log(res);
  addTodoItem(req, res);
});

module.exports = router;
