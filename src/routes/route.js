
const express = require("express");
const user = require('../controller/user'); 
const router = express.Router();

router.get("/services", user.findAll); 
router.post("/contact", user.contactData); 

module.exports = router;
