const express = require("express");
const  NotizieController  = require("../controllers/notizie_controllers/notizieController");

const router = express.Router();


router.get("/", NotizieController.getNotizie)
router.post("/", NotizieController.sendNotizie)

module.exports = router;