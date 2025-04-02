/* 
Il file galleryController.js definisce i metodi per gestire le operazioni relative alle immagini della galleria nel database.
- Metodi definiti:
  - getImages: recupera tutte le immagini dal database. Se viene fornito un parametro di ricerca (data), esegue una query per trovare immagini il cui titolo o informazioni corrispondono al parametro.
  - sendImages: consente l'inserimento di nuove immagini nel database utilizzando il metodo bulkCreate.
- Utilizza il modello GalleryImage e l'istanza Sequelize per interagire con il database.
- Restituisce i risultati delle operazioni come risposta JSON.
*/

const { GalleryImage, sequelize } = require("../../models");

/*
  Recupera le immagini dalla galleria.
  - Se non viene fornito alcun parametro di query, restituisce tutte le immagini.
  - Se viene fornito un parametro `data` (via query string), esegue una query per cercare
    immagini il cui titolo o campo "informations" contengano il valore specificato.
  - Per semplicità si utilizza una query GET con parametri URL.
  - In alternativa, per maggiore sicurezza, si potrebbe usare una POST con i parametri nel body.
*/

exports.getImages = async (req, res) => {
    //const listOfImages = await GalleryImage.findAll();
  
    //console.log(req.query)
    const {data} = req.query
  
    const listOfImages = await ( (!data)
      ? GalleryImage.findAll()
      : sequelize.query(
          "SELECT * FROM GalleryImages where title like :req OR informations like :req",
          {
            replacements: { req: `%${data}%` },
            model: GalleryImage,
            mapToModel: true,
  
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            // NON NECESSARIO SE MAPPIAMO DIRETTAMENTE I RISULTATI IN UN MODELLO SEQUELIZE
            //  type: sequelize.QueryTypes.SELECT
          }
        ));
  
    res.json(listOfImages);
  };

  /*
  Inserisce nuove immagini nel database.
  - Si aspetta un array di oggetti nel body della richiesta contenente i dati delle immagini.
  - Utilizza il metodo `bulkCreate` di Sequelize per effettuare l'inserimento multiplo.
  - In caso di successo, restituisce un messaggio di conferma.
  */

  exports.sendImages = async (req, res) => {
    const imgs = req.body;
  
    await GalleryImage.bulkCreate(imgs);
    res.json("Inserimento avvenuto con successo");
  }