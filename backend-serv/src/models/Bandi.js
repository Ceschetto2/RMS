/* 
Il file Bandi.js definisce il modello Bando per interagire con la tabella "Bandi" nel database.
- Campi definiti:
  - ID_Bando: chiave primaria, intero auto-incrementato.
  - titolo: stringa, obbligatoria.
  - oggetto: stringa, obbligatoria.
  - descrizione: stringa, obbligatoria.
  - ID_Utente: chiave esterna che fa riferimento alla tabella "Utenti".
- Configura il nome della tabella come "Bandi".
- Associazioni:
  - Ogni bando appartiene a un utente tramite la chiave esterna "ID_Utente".
  - Ogni bando può essere associato a molti PDF tramite la tabella intermedia "BandiPDF".
- Esporta il modello per essere utilizzato in altre parti dell'applicazione.
*/

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
                    model:"Utenti",
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