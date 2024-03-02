const connection = require("../config/database");

const getHomepage = (req, res) => {
  return res.render("home.ejs");
};

const postCreateUser = (req, res) => {
  let { emailId, name, city } = req.body;
  connection.query(
    `INSERT INTO Persons (email, name, city) 
     VALUES (?,?,?)`,
    [emailId, name, city],
    function (err, result) {
      console.log(err, result);
      res.send("Create user success");
    }
  );
};

module.exports = {
  getHomepage,
  postCreateUser,
};
