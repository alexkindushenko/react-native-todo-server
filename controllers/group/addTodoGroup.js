const { Types } = require("mongoose");

const UserSchema = require("../../models/user");

module.exports = async (req, res) => {
  const { groupTitle } = req.body;

  try {
    const user = await UserSchema.findById(req.session.user._id);
    const newGroup = {
      groupTitle,
      _id: Types.ObjectId(),
      todos: [{ _id: Types.ObjectId(), title: "New todo in new group" }],
    };

    user.listGroups = [...user.listGroups, newGroup];

    await user.save();

    return res.status(201).json(newGroup);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error!" });
  }
};
