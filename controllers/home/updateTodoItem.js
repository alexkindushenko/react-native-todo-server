module.exports = (req, res) => {
  const { done, selectedGpoupId } = req.body;
  const { id } = req.params;

  console.log(done, selectedGpoupId, id);
  return res.status(201).end();
};
