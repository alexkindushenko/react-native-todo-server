const { Router } = require("express");
const router = Router();

const addNewGroup = require("../controllers/group/addNewGroup");

router.patch("/", async (req, res) => {
  sendTodoList(req, res);
});
router.post("/", async (req, res) => {
  try {
    addNewGroup(req, res);
  } catch (error) {
    console.log("Error");
  }
});

module.exports = router;
