const bcript = require("bcryptjs");
const UserSchema = require("../../models/user");

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    const candidate = await UserSchema.findOne({ email });

    if (candidate) {
      if (await bcript.compare(password, candidate.password)) {
        req.session.user = candidate;
        req.session.isAuthenticated = true;

        req.session.save((err) => {
          err ? res.status(500).json({ message: "Server error!" }) : res.end();
        });
      } else {
        res.status(400).json({ message: "Incorrect data. Check the data entered." });
      }
    } else {
      res.status(400).json({ message: "Incorrect data. Check the data entered." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error!" });
  }
};
