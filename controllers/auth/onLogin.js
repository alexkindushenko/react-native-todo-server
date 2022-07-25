module.exports = (req, res) => {
  const { email, password } = req.body;
  console.log("LOG---" + email);

  return res.status(200).end();
};
