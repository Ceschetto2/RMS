const express = require("express");
const router = express.Router();
const { GalleryImage, sequelize } = require("../models");



router.get("/", async (req, res) => {
  //const listOfImages = await GalleryImage.findAll();
  if (req.body === null){

    
  }
  const listOfImages = await sequelize.query('SELECT DISTINCT * FROM GalleryImages' , {
    type: sequelize.QueryTypes.SELECT
  });
  console.log(listOfImages.length)
  res.json(listOfImages);
});

router.post("/", async (req, res) => {
  const imgs = req.body;

  await GalleryImage.bulkCreate(imgs);
  res.json("Inserimento avvenuto con successo");
});

module.exports = router;
