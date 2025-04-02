/* 
Il file Gallery_Images.js definisce il modello GalleryImage per interagire con la tabella "GalleryImages" nel database.
- Campi definiti:
  - img_link: stringa obbligatoria che rappresenta il link all'immagine.
  - title: stringa opzionale che rappresenta il titolo dell'immagine.
  - informations: stringa opzionale che contiene informazioni aggiuntive sull'immagine.
  - ID_Utente: chiave esterna opzionale che fa riferimento alla tabella "Utenti".
- Configura il nome della tabella come "GalleryImages".
- Associazioni:
  - Ogni immagine appartiene a un utente tramite la chiave esterna "ID_Utente".
- Esporta il modello per essere utilizzato in altre parti dell'applicazione.
*/

const Utenti=  require("./Utenti")

module.exports = (sequelize, DataTypes) => {
    const GalleryImage = sequelize.define("GalleryImage", {
        img_link: {
            type:DataTypes.STRING,
            allowNull:false,


        },
        title:{
            type:DataTypes.STRING,
            allowNull:true,

        },
        informations:{
            type:DataTypes.STRING,
            allowNull:true,

        },
        ID_Utente:{
            type:DataTypes.INTEGER,
            allowNull:true,
            references:{
                model: "Utenti",
                key: "ID_Utente"

            },
        }
    },
    {
        tableName: 'GalleryImages',
    })
    GalleryImage.associate = (models)=>{
        GalleryImage.belongsTo(models.Utente,
            {
                foreignKey:"ID_Utente",
            }
        )
    }
    return GalleryImage;
};