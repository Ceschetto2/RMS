module.exports = (sequelize, Datatypes) => {
    const Utente = sequelize.define("Utente", {
        ID_Utente:
        {
            type:Datatypes.INTEGER,
            allownull:false,
            autoIncrement: true,
            primaryKey:true,
        },
        nome:
        {
            type:Datatypes.STRING,
            allownull:false,

        },
        data_nascita:
        {
            type:Datatypes.STRING,
            allownull:false,
            
        },
        ruolo:
        {
            type: Datatypes.STRING,
            allownull:false,

        },
        mail:
        {
            type: Datatypes.STRING,
            allownull:false,
            
        }
    },
    {
        tableName: 'Utenti',
    },
)
    return Utente;
}