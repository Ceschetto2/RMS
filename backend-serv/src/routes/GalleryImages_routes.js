const express = require("express");
const router = express.Router();
const GalleryController = require('../controllers/gallery_controllers/galleryController');

//Nelle routes verranno inserite tutte le rotte riguardanti una determinata componente
router.get("/", GalleryController.getImages);
router.post("/", GalleryController.sendImages);
//Possiamo anche specializzare la route per legarla a diverse funzioni o query. In questo caso questa routes fa la stessa cosa della prima
router.get("/test", GalleryController.getImages);

module.exports = router;
