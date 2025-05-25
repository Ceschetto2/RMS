/* 
Il file Notizie_routes.js definisce le roots per gestire le richieste relative alle notizie.
- Utilizza Express per creare un router.
- Importa il controller NotizieController per gestire la logica delle richieste.
- Rotte disponibili:
  - GET "/": recupera tutte le notizie utilizzando il metodo getNotizie del controller.
  - POST "/": consente l'inserimento di nuove notizie utilizzando il metodo sendNotizie del controller.
- Esporta il router per essere utilizzato nel server principale.
*/

const express = require("express");
const  newsController  = require("../controllers/news_controllers/newsController");

const router = express.Router();


router.get("/", newsController.getNews)
router.post("/", newsController.sendNews)
router.get("/lastest", newsController.getlastnews);
module.exports = router;