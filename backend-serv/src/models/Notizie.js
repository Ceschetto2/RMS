module.exports = (sequelize, DataTypes) =>{
    const Notizia = sequelize.define("Notizia", {
        ID_Notizia: {
            type: DataTypes.INTEGER,
            allowNull:false,
            autoIncrement: true,
            primaryKey: true,
        },
        titolo:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        oggetto:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        descrizione:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        img_link:{
            type: DataTypes.STRING,
            allowNull:true,
        },


    })
    return Notizia;


}