const express = require("express");
const {Regola} = require("../models");

const router = express.Router();

router.get("/", async(req,res) => {
    const response = await Regola.findAll()
    res.json(response);
})


router.post("/", async(req,res) => {
    const regole = req.body
    await Regola.bulkCreate(regole)
    res.json("Inserimento avvenuto con successo")
})
module.exports = router;