
module.exports = (sequelize, DataTypes) => {
    const Bando = sequelize.define(
        "Bando",
        {
            ID_Bando: {
                type: DataTypes.INTEGER,
                allowNull:false,
                autoIncrement: true,
                primaryKey: true,

            },
            file_path:{
                type: DataTypes.STRING,
                allowNull:true,
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
            ID_Utente:{
                type:DataTypes.INTEGER,
                references:{
                    models:"Utenti",
                    key: "ID_Utente"

                },
            },
        },
        {
            tableName: 'Bandi',
        },
    ) 
    Bando.associate= (models) =>{
        Bando.belongsTo(models.Utente,
            {
                foreignKey:"ID_Utente",
            }
        )
        Bando.belongsToMany(models.Pdf,
            {
                through:"BandiPDF",
                foreignKey:"ID_Bando",
                otherKey:"file_path"
            }
        )

    };
return Bando;

}