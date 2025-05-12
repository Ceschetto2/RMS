const express = require("express");
const router = express.Router();

const { tokenValidation } = require("../controllers/auth_controller/authController");
const userController = require("../controllers/user_controller/userController");


router.post("/addNewUser", tokenValidation, userController.addNewUser);
router.post("/forceAddNewUser", userController.addNewUser); //permette di aggiungere un nuovo utente senza token

router.get("/getUserTest", tokenValidation, userController.getUserFromToken )

module.exports = router;
