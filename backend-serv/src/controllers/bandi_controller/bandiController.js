const{Notices, sequelize} = require("../../models")
// Recupera tutti i bandi dal database e restituisce come risposta JSON.
exports.getBandi = async (req, res) => {
    const { data } = req.query;
    const results = await (!data?
        Noticesotices.findAll() 
        : 
        sequelize.query("SELECT * FROM Notices where title like :req or object like :req",
            {
                replacements: { req: `%${data}%` },
                model: Notices,
                mapToModel: true,
            }
        )
    )
    
    res.json(results)}

  
exports.sendBandi = async (req, res) => {
    const bandi = req.body;
      console.log(bandi);
    try{
    await notices.bulkCreate(bandi)
    }
    catch(error){
        res.json(error)
    }
    res.json("Inserimento avvenuto con successo")

}
exports.getlastBandi = async (req, res) => {
    const bandi = req.body;

    
    const results = await sequelize.query("SELECT * FROM Notices ORDER BY createdAt DESC LIMIT 3", {
        model: Notices,
        mapToModel: true,
    });
    res.json(results);
}