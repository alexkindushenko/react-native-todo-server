const { Router } = require("express");
const router = Router();

const sendTodoList = require("../controllers/home/sendTodoList");
const addTodoItem = require("../controllers/home/addTodoItem");
const updateTodoItem = require("../controllers/home/updateTodoItem");
const deleteTodoItem = require("../controllers/home/deleteTodoItem");

const isAuth = require("../midlevare/isAuth");

router.patch("/", isAuth, async (req, res) => {
  sendTodoList(req, res);
});
router.post("/", isAuth, async (req, res) => {
  try {
    addTodoItem(req, res);
  } catch (error) {
    console.log("Error");
  }
});

router.put("/:id", isAuth, async (req, res) => {
  try {
    updateTodoItem(req, res);
  } catch (error) {
    console.log("Error");
  }
});

router.delete("/:id", isAuth, async (req, res) => {
  try {
    deleteTodoItem(req, res);
  } catch (error) {
    console.log("Error");
  }
});
module.exports = router;
