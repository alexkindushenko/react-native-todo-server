const UserSchema = require("../../models/user");

module.exports = async (req, res) => {
  const { listGroups } = await UserSchema.findOne({
    email: req.session.user.email,
  });

  return res.json({
    listGroups,
  });
};
