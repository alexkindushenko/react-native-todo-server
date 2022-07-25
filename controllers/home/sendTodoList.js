const UserSchema = require("../../models/user");

module.exports = async (req, res) => {
  const { selectedGpoupId, listGroups } = await UserSchema.findOne({
    email: req.session.user.email,
  });

  return res.json({
    listGroups,
    selectedGpoupId: selectedGpoupId ? selectedGpoupId : listGroups[0]._id,
  });
};
