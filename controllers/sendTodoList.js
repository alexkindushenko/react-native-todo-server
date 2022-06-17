module.exports = (req, res) => {
  return res.json({
    listGroups: [
      {
        id: "zaq",
        groupTitle: "To Buy",
        todos: [
          { id: "qaz", title: "new Book" },
          { id: "qax", title: "new Book" },
          { id: "qac", title: "new Book" },
        ],
      },
      {
        id: "xsw",
        groupTitle: "To Watch",
        todos: [
          { id: "wsx", title: "Terminator 2" },
          { id: "wsc", title: "Terminator 3" },
          { id: "wsv", title: "Terminator 4" },
          { id: "wsb", title: "Terminator 5" },
        ],
      },
    ],
    selectedGpoupId: "xsw",
  });
};
