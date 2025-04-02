/* 
Il file Utenti.js definisce il modello Utente per interagire con la tabella "Utenti" nel database.
- Campi definiti:
  - ID_Utente: chiave primaria, intero auto-incrementato.
  - nome: stringa, obbligatoria.
  - data_nascita: stringa, obbligatoria.
  - ruolo: stringa, obbligatoria.
  - mail: stringa, obbligatoria.
- Configura il nome della tabella come "Utenti".
- Associazioni:
  - Un utente può avere molti Bandi, Regole, Notizie, Immagini della galleria e Domande FAQ, utilizzando chiavi esterne "ID_Utente".
- Esporta il modello per essere utilizzato in altre parti dell'applicazione.
*/

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