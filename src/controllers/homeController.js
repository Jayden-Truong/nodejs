const pool = require("../config/database");

const getHomepage = (req, res) => {
  return res.render("home.ejs");
};

const postCreateUser = (req, res) => {
  console.log(req.body);
};

module.exports = {
  getHomepage,
  postCreateUser,
};
