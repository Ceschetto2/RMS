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
const { Notices } = require("../models")
const router  = express.Router()

router.get("/", async(req,res)=>{
    const response = await Notices.findAll();
    res.json(response);
})

router.post("/", async(req,res)=>{
    await Notices.bulkCreate(req.body);
    res.json("Inserimento avvenuto con successo");
})

module.exports = router;