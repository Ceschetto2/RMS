module.exports = (sequelize, DataTypes) => {
    const Gallery_Images = sequelize.define("Gallery_Image", {
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
    return Gallery_Images;
};