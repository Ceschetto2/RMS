/* 
Il file Pdfs.js definisce il modello Pdf per interagire con la tabella "Pdfs" nel database.
- Campi definiti:
    - file_path: stringa, chiave primaria, obbligatoria.
    - preview: stringa, obbligatoria.
    - createdAt: data, obbligatoria, gestita automaticamente.
    - updatedAt: data, obbligatoria, gestita automaticamente.
- Configura il nome della tabella come "Pdfs".
- Associazioni:
    - Ogni PDF può essere associato a più bandi tramite la tabella intermedia "NoticePdfs".
    - Ogni PDF può essere associato a più regolamenti interni tramite la tabella intermedia "InternalRegulationsPdfs".
- Esporta il modello per essere utilizzato in altre parti dell'applicazione.
*/

const Bandi = require("./Notices")

module.exports = (sequelize, DataTypes) =>{
    const Pdfs = sequelize.define("Pdfs",{
        file_path:{
            type: DataTypes.STRING,
            allowNull:false,
            primaryKey:true,
        },
        preview:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        createdAt:{
            type: DataTypes.DATE,
            allowNull:false,
        },
        updatedAt:{
            type: DataTypes.DATE,
            allowNull:false,
        }
    },
    {
        tableName: 'Pdfs',
    })
    Pdfs.associate = (models) =>{
        Pdfs.belongsToMany(models.Notices,
            {
            through:"NoticesPdfs",
            foreignKey:"file_path",
            otherKey:"notices_id"
            }
        )
        Pdfs.belongsToMany(models.InternalRegulations,
            {
            through:"InternalRegulationsPdfs",
            foreignKey:"file_path",
            otherKey:"rule_id"
            }
        )
    }

    return Pdfs;
}