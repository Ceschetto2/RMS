const express = require("express");
const {FaqQuestion} = require("../models");
const router = express.Router();


router.get("/", async(req,res) => {
    const risultati = await FaqQuestion.findAll();
    res.json(risultati);
    });

router.post("/", async(req,res) => {
    const qa = req.body
    FaqQuestion.bulkCreate(qa)
    res.json("Inserimento avvenuto")


})

module.exports = router;