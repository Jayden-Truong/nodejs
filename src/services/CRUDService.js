const pool = require("../config/database");

const getAllUser = async () => {
  const connection = await pool.getConnection();
  const [results, fields] = await connection.execute(`SELECT * FROM Persons`);
  return results;
};

const getUserById = async (req, res) => {
  const connection = await pool.getConnection();
  const userId = req.params.id;
  const [results, fields] = await connection.execute(
    `SELECT * FROM Persons where id = ?`,
    [userId]
  );
  return results;
};

const createUser = async (req, res) => {
  let { emailId, name, city } = req.body;
  const connection = await pool.getConnection();
  const [results, fields] = await connection.execute(
    `INSERT INTO Persons (email, name, city) VALUES (?,?,?)`,
    [emailId, name, city]
  );
  return results;
};

const updateUser = async (req, res) => {
  console.log(req.body);
  let { emailId, name, city, userID } = req.body;
  const connection = await pool.getConnection();
  const [results, fields] = await connection.execute(
    `UPDATE Persons SET email = ?, name = ?, city = ? WHERE id = ?`,
    [emailId, name, city, userID]
  );
  return results;
};

const deleteUser = async (id) => {
  const connection = await pool.getConnection();
  const [results, fields] = await connection.execute(
    `DELETE FROM Persons WHERE id = ?`,
    [id]
  );
  return results;
};
module.exports = {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
