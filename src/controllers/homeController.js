const pool = require("../config/database");
const { getAllUser, getUserById } = require("../services/CRUDService");

const getHomepage = async (req, res) => {
  let results = await getAllUser();
  return res.render("home.ejs", { listUser: results });
};
const getCreatePage = (req, res) => {
  return res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
  let result = await getUserById(req);
  console.log("result", result);
  return res.render("update.ejs", { user: result });
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
