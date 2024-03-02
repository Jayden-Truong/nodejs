const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getCreatePage,
  getUpdatePage,
  postCreateUser,
} = require("../controllers/homeController");

router.get("/", getHomepage);
router.get("/create", getCreatePage);
router.get("/update", getUpdatePage);
router.post("/create-user", postCreateUser);

module.exports = router;
