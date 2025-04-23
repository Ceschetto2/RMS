/* 
Il file GalleryImages_routes.js definisce le roots per gestire le richieste relative alle immagini della galleria.
- Utilizza Express per creare un router.
- Importa il controller GalleryController per gestire la logica delle richieste.
- Rotte disponibili:
  - GET "/": recupera tutte le immagini utilizzando il metodo getImages del controller.
  - POST "/": consente l'inserimento di nuove immagini utilizzando il metodo sendImages del controller.
  - GET "/test": esegue la stessa funzione della rotta GET "/" per scopi di test o personalizzazione.
- Esporta il router per essere utilizzato nel server principale.
*/

const express = require("express");
const router = express.Router();
const GalleryController = require('../controllers/gallery_controllers/galleryController');

//Nelle routes verranno inserite tutte le rotte riguardanti una determinata componente
router.get("/", GalleryController.getImages);
router.post("/", GalleryController.sendImages);
//Possiamo anche specializzare la route per legarla a diverse funzioni o query. In questo caso questa routes fa la stessa cosa della prima
router.get("/test", GalleryController.getImages);

module.exports = router;
