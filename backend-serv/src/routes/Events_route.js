const eventsController = require("../controllers/events_controller/eventsController");
const { tokenValidation } = require("../controllers/auth_controller/authController");
const router = require('express').Router();


router.get("/allEvents", tokenValidation ,eventsController.getAllEvents);
router.post("/addSingleEvent", tokenValidation ,eventsController.addSingleEvent);    
router.post("/addMultipleEvents", tokenValidation , eventsController.addMultipleEvents);


module.exports = router;