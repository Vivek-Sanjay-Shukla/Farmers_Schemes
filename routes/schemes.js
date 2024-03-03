const express = require('express');
const router = express.Router();

const {getAllSchemes} = require("../controllers/schemes")

router.route("/").get(getAllSchemes);

module.exports = router;