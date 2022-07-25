const { Router } = require("express");
const router = Router();

const onLogin = require("../controllers/auth/onLogin");
const onRegister = require("../controllers/auth/onRegister");

router.post("/login", async (req, res) => {
  try {
    await onLogin(req, res);
  } catch (error) {
    console.log("Error");
  }
});

router.post("/register", (req, res) => {
  try {
    onRegister(req, res);
  } catch (error) {
    console.log("Error");
  }
});

module.exports = router;
