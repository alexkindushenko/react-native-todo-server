const UserSchema = require("../../models/user");

module.exports = async (req, res, id) => {
  const { selectedGpoupId } = req.body;

  try {
    const user = await UserSchema.findById(req.session.user._id);

    const listGroups = user.listGroups.map((el) =>
      el._id.toString() === selectedGpoupId
        ? {
            ...el,
            todos: el.todos.filter((item) => item._id.toString() !== id),
          }
        : el
    );
    user.listGroups = listGroups;

    await user.save();

    res.status(204).end();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error!" });
  }
};
