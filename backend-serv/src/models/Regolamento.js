
module.exports = (sequelize, DataTypes) =>{
    const Regola = sequelize.define("Regola",{
            ID_Regola:
            {
                type: DataTypes.INTEGER,
                allowNull:false,
                autoIncrement: true,
                primaryKey: true
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
                    model: "Utenti",
                    key: "ID_Utente"
    
                },
            }
        },
        {
            tableName:"Regolamento",
        },


    )
    Regola.associate = (models) =>{
        Regola.belongsTo(models.Utente, {
            foreignKey: "ID_Utente",
        });
        Regola.belongsToMany(models.Pdf,
            {
                through: "RegolamentoPdf",
                foreignKey: "ID_Regola",
                otherKey: "file_path"
            }
        )
    }


  
    return Regola;
}