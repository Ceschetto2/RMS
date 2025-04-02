/* 
Il file Notizie.js definisce il modello Notizia per interagire con la tabella "Notizie" nel database.
- Campi definiti:
  - ID_Notizia: chiave primaria, intero auto-incrementato.
  - titolo: stringa, obbligatoria.
  - oggetto: stringa, obbligatoria.
  - descrizione: stringa, obbligatoria.
  - img_link: stringa opzionale che rappresenta il link a un'immagine associata alla notizia.
  - ID_Utente: chiave esterna che fa riferimento alla tabella "Utenti".
- Configura il nome della tabella come "Notizie".
- Associazioni:
  - Ogni notizia appartiene a un utente tramite la chiave esterna "ID_Utente".
- Esporta il modello per essere utilizzato in altre parti dell'applicazione.
*/

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
        ID_Utente:{
            type:DataTypes.INTEGER,
            references:{
                model:"Utenti",
                key: "ID_Utente"

            },
        },


    },{
        tableName: 'Notizie',
    }
)

    Notizia.associate=(models)=>{
        Notizia.belongsTo(models.Utente,{
            foreignKey:"ID_Utente",
        })
    }
    
    return Notizia;


}