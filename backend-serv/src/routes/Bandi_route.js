
const express  = require("express")
const { Bando } = require("../models")
const router  = express.Router()

router.get("/", async(req,res)=>{
    const response = await Bando.findAll()
    res.json(response)
})

router.post("/", async(req,res)=>{
    const regole = req.body
    await Bando.bulkCreate()
})

module.exports = router;