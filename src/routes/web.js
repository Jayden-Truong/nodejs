const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getCreatePage,
  postCreateUser,
} = require("../controllers/homeController");

router.get("/", getHomepage);
router.get("/create", getCreatePage);
router.post("/create-user", postCreateUser);

module.exports = router;
