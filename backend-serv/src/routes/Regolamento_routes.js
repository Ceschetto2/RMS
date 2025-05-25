/* 
Il file Regolamento_routes.js definisce le roots per gestire le richieste relative al regolamento.
- Utilizza Express per creare un router.
- Importa il modello Regola per interagire con il database.
- Rotte disponibili:
  - GET "/": recupera tutte le regole dal database e le restituisce come risposta JSON.
  - POST "/": consente l'inserimento di più regole nel database utilizzando il metodo bulkCreate.
- Esporta il router per essere utilizzato nel server principale.
*/

const express = require("express");
const  RegolamentoController  = require("../controllers/regolamento_controller/regolamento_controller");

const router = express.Router();

router.get("/", RegolamentoController.getRegulations);
router.post("/", RegolamentoController.sendRegulations);



router.post("/", )
module.exports = router;