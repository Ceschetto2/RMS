

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
    })
    return GalleryImage;
};