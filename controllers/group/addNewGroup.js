module.exports = (req, res) => {
  const { groupTitle } = req.body;

  return res.status(201).json({
    id: Date.now(),
    groupTitle,
    todos: [{ id: "ksx", title: "New todo in new group", done: false }],
  });
};
