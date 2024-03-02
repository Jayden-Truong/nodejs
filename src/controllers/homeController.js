const pool = require("../config/database");
const { getAllUser } = require("../services/CRUDService");

const getHomepage = async (req, res) => {
  let results = await getAllUser();
  return res.render("home.ejs", { listUser: results });
};
const getCreatePage = (req, res) => {
  return res.render("create.ejs");
};

const getUpdatePage = (req, res) => {
  const userId = req.params.id;
  return res.render("update.ejs");
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
  getUpdatePage,
};
