module.exports = (req, res) => {
  const { selectedGpoupId, title } = req.body;

  return res.status(201).json({
    selectedGpoupId,
    todo: { id: Date.now(), title },
  });
};
