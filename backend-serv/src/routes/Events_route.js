const eventsController = require("../controllers/events_controller/eventsController");

const router = require('express').Router();


router.get("/allEvents", eventsController.getAllEvents);
router.post("/addSingleEvent", eventsController.addSingleEvent);    
router.post("/addMultipleEvents", eventsController.addMultipleEvents);


module.exports = router;