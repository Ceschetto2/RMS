const { GalleryImage, sequelize } = require("../../models");


//da documentare. Sto usando una req.query (documentazione) altertativamente si dovrebbe usare una POST per inviare un req con un body contentente
//le informazioni per la quary. In questo caso non ci interessa (almeno per ora) nascondere le informazioni per la query.
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

  exports.sendImages = async (req, res) => {
    const imgs = req.body;
  
    await GalleryImage.bulkCreate(imgs);
    res.json("Inserimento avvenuto con successo");
  }