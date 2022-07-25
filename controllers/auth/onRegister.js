const bcript = require("bcryptjs");
const UserSchema = require("../../models/user");

module.exports = async (req, res) => {
  const { email, password } = req.body;
  const listGroups = [
    {
      groupTitle: "Buy",
      todos: [{ title: "new Book" }, { title: "new Book", done: true }, { title: "new Book" }],
    },
    {
      groupTitle: "Watch",
      todos: [
        { title: "Terminator 2" },
        { title: "Terminator 3" },
        { title: "Terminator 4" },
        { title: "Terminator 5", done: true },
      ],
    },
  ];

  const candidate = await UserSchema.findOne({ email });
  try {
    if (candidate) {
      res.status(400).end();
    } else {
      const hashPassword = await bcript.hash(password, 10);
      const user = new UserSchema({
        email,
        password: hashPassword,
        listGroups,
      });

      await user.save();
      req.session.user = user;
      req.session.isAuthenticated = true;
      req.session.save((err) => {
        err ? res.status(500).json({ message: "Server error!" }) : res.status(201).end();
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error!" });
  }
};
