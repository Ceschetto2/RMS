/* 
Il file Bandi_route.js definisce le roots per gestire le richieste relative ai bandi.
- Utilizza Express per creare un router.
- Importa il modello Bando per interagire con il database.
- Rotte disponibili:
  - GET "/": recupera tutti i bandi dal database e li restituisce come risposta JSON.
  - POST "/": consente l'inserimento di nuovi bandi nel database utilizzando il metodo bulkCreate.
- Esporta il router per essere utilizzato nel server principale.
*/

const express  = require("express")
const bandiController = require("../controllers/bandi_controller/bandiController");

const router  = express.Router();

router.get("/", bandiController.getBandi);
router.post("/",bandiController.sendBandi);
router.get("/latest", bandiController.getlastBandi);
module.exports = router;