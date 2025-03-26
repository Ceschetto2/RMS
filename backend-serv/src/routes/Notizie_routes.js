const express = require("express");
const {Notizia, sequelize} = require("../models")
const router = express.Router();


router.get("/", async(req,res) =>{
    const {data} = req.query

    const results = await (!data?
        Notizia.findAll() 
        : 
        sequelize.query("SELECT * FROM Notizia where titolo like :req or oggetto like :req",
            {
                replacements: { req: `%${data}%` },
                model: Notizia,
                mapToModel: true,
            }
        )
    )
    
    res.json(results)

})
router.post("/", async(req,res) =>{
    const notiz= req.body
    console.log(notiz);
    try{
    await Notizia.bulkCreate(notiz)
    }
    catch(error){
        res.json(error)
    }
    res.json("Inserimento avvenuto con successo")

})

module.exports = router;