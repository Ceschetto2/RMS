const express = require("express");
const faqControllers = require("../controllers/faq_controllers/faqControllers");

const router = express.Router();



router.get("/", faqControllers.getFaqList);

router.post("/", faqControllers.sendFaqQuestion)

module.exports = router;