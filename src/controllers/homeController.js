const pool = require("../config/database");

const getHomepage = (req, res) => {
  return res.render("home.ejs");
};
const getCreatePage = (req, res) => {
  return res.render("create.ejs");
};

const postCreateUser = async (req, res) => {
  let { emailId, name, city } = req.body;

  try {
    const connection = await pool.getConnection();
    const [results, fields] = await connection.execute(
      `INSERT INTO Persons (email, name, city) VALUES (?,?,?)`,
      [emailId, name, city]
    );

    console.log(results);
    connection.release(); // Đảm bảo release connection sau khi sử dụng
    res.send("Create new user success");
  } catch (error) {
    console.error("Error executing query: ", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getHomepage,
  postCreateUser,
  getCreatePage,
};
