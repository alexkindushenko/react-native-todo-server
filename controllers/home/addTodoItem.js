const { Types } = require("mongoose");

const UserSchema = require("../../models/user");

module.exports = async (req, res) => {
  const { selectedGpoupId, title } = req.body;

  const user = await UserSchema.findById(req.session.user._id);
  const todo = {
    title: req.body.title,
    _id: Types.ObjectId(),
  };
  const listGroups = user.listGroups.map((el) => {
    return el._id.toString() === selectedGpoupId ? { ...el, todos: [...el.todos, todo] } : el;
  });

  user.listGroups = listGroups;

  await user.save();

  return res.status(201).json({ _id: todo._id, title });
};
