const pool = require("../config/database");

const getAllUser = async () => {
  const connection = await pool.getConnection();
  const [results, fields] = await connection.execute(`SELECT * FROM Persons`);
  return results;
};

module.exports = {
  getAllUser,
};
