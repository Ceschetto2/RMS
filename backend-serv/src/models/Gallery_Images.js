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