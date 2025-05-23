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
const {InternalRegulations} = require("../models");

const router = express.Router();

router.get("/", async(req,res) => {
    const response = await InternalRegulations.findAll()
    res.json(response);
})


router.post("/", async(req,res) => {
    const rules = req.body
    await InternalRegulations.bulkCreate(rules)
    res.json("Inserimento avvenuto con successo")
})
module.exports = router;