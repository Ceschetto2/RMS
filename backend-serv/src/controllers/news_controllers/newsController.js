/* 
Il file notizieController.js definisce i metodi per gestire le operazioni relative alle notizie nel database.
- Metodi definiti:
  - getNotizie: recupera tutte le notizie dal database. Se viene fornito un parametro di ricerca (data), esegue una query per trovare notizie il cui titolo o oggetto corrisponde al parametro.
  - sendNotizie: consente l'inserimento di nuove notizie nel database utilizzando il metodo bulkCreate.
- Utilizza il modello Notizia e l'istanza Sequelize per interagire con il database.
- Restituisce i risultati delle operazioni come risposta JSON.
*/

const {News, sequelize} = require("../../models")

/* 
  Recupera le notizie dal database.
  - Se non viene fornito alcun parametro di query, restituisce tutte le notizie.
  - Se viene fornito un parametro `data` (via query string), esegue una query per cercare
    notizie il cui titolo o oggetto contengano il valore specificato.
*/

exports.getNews = async(req,res) =>{
    const {data} = req.query

    const results = await (!data?
        News.findAll() 
        : 
        sequelize.query("SELECT * FROM News where title like :req or object like :req",
            {
                replacements: { req: `%${data}%` },
                model: News,
                mapToModel: true,
            }
        )
    )
    
    res.json(results)

}

/* 
  Inserisce nuove notizie nel database.
  - Si aspetta un array di oggetti nel body della richiesta contenente i dati delle notizie.
  - Utilizza il metodo `bulkCreate` di Sequelize per effettuare l'inserimento multiplo.
  - In caso di successo, restituisce un messaggio di conferma.
*/

exports.sendNews = async(req,res) =>{
    const notiz= req.body
    console.log(notiz);
    try{
    await News.bulkCreate(notiz)
    }
    catch(error){
        res.json(error)
    }
    res.json("Inserimento avvenuto con successo")

}