module.exports = (sequelize, Datatypes) => {
    const Utente = sequelize.define("Utente", {
        ID_Utente:
        {
            type:Datatypes.INTEGER,
            allowNull:false,
            autoIncrement: true,
            primaryKey:true,
        },
        nome:
        {
            type:Datatypes.STRING,
            allowNull:false,

        },
        data_nascita:
        {
            type:Datatypes.STRING,
            allowNull:false,
            
        },
        ruolo:
        {
            type: Datatypes.STRING,
            allowNull:false,

        },
        mail:
        {
            type: Datatypes.STRING,
            allowNull:false,
            
        }
    },
    {
        tableName: 'Utenti',
    },
)
Utente.associate = (models)=>{
    Utente.hasMany(models.Bando,
        {
            foreignKey:"ID_Utente"
        }
    )
    Utente.hasMany(models.Regola,
        {
            foreignKey:"ID_Utente"
        }
        
    )
    Utente.hasMany(models.Notizia,
        {
            foreignKey:"ID_Utente"
        }
    )
    Utente.hasMany(models.GalleryImage,
        {
            foreignKey:"ID_Utente"
        }
    )
    Utente.hasMany(models.FaqQuestion,
        {
            foreignKey: "ID_Utente"
        }
    )
}

    return Utente;
}