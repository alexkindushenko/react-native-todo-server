const UserSchema = require("../../models/user");

module.exports = async (req, res, id) => {
  try {
    const user = await UserSchema.findById(req.session.user._id);

    const listGroups = user.listGroups.filter((el) => el._id.toString() !== id);

    user.listGroups = listGroups;

    await user.save();

    return res.status(204).end();
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: "Server error!" });
  }
};
