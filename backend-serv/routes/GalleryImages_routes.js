const express = require('express')
const router = express.Router()
const {GalleryImage} = require("../models")



router.get("/",async(req, res ) =>{

const listOfImages= await GalleryImage.findAll();
res.json(listOfImages);
})





module.exports = router