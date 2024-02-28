const pool = require("../config/database");

const getHomepage = (req, res) => {
  let users = [];
  pool.query("SELECT * FROM Persons", function (err, result, fields) {
    users = result;
    console.log(users);
    res.send(JSON.stringify(users));
  });
};

module.exports = {
  getHomepage,
};
