const pool = require("../config/database");
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../services/CRUDService");

const getHomepage = async (req, res) => {
  let results = await getAllUser();
  return res.render("home.ejs", { listUser: results });
};
const getCreatePage = (req, res) => {
  return res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
  let result = await getUserById(req);
  return res.render("update.ejs", { user: result });
};

const postCreateUser = async (req, res) => {
  let result = await createUser(req);
  console.log(result);
  res.send("Create new user success");
};

const postUpdateUser = async (req, res) => {
  const result = await updateUser(req);
  console.log(result);
  res.send("Update user success");
};

const postDeleteUser = async (req, res) => {
  let result = await getUserById(req);
  res.render("delete.ejs", { user: result[0] });
};

const postHandleRemoveUser = async (req, res) => {
  console.log("req.body", req.body);
  const id = req.body.userID;
  let result = await deleteUser(id);
  console.log("result", result);
  res.redirect("/");
};
module.exports = {
  getHomepage,
  getCreatePage,
  getUpdatePage,
  postCreateUser,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
};
