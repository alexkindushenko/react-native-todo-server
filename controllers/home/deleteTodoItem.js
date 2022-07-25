module.exports = (req, res) => {
  const { selectedGpoupId } = req.body;
  const { id } = req.params;

  console.log(selectedGpoupId, id);
  return res.end();
};
