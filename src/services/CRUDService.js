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

module.exports = {
  getAllUser,
  getUserById,
};
