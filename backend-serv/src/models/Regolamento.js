/* 
Il file Regolamento.js definisce il modello Regola per interagire con la tabella "Regolamento" nel database.
- Campi definiti:
  - ID_Regola: chiave primaria, intero auto-incrementato.
  - titolo: stringa, obbligatoria.
  - oggetto: stringa, obbligatoria.
  - descrizione: stringa, obbligatoria.
  - ID_Utente: chiave esterna che fa riferimento alla tabella "Utenti".
- Configura il nome della tabella come "Regolamento".
- Associazioni:
  - Ogni regola appartiene a un utente tramite la chiave esterna "ID_Utente".
  - Ogni regola può essere associata a più PDF tramite una tabella intermedia "RegolamentoPdf".
- Esporta il modello per essere utilizzato in altre parti dell'applicazione.
*/

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