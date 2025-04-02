/* 
Il file Pdfs.js definisce il modello Pdf per interagire con la tabella "Pdfs" nel database.
- Campi definiti:
  - file_path: chiave primaria, stringa che rappresenta il percorso del file PDF.
  - preview: stringa che rappresenta il percorso dell'immagine di anteprima del PDF.
- Configura il nome della tabella come "Pdfs".
- Associazioni:
  - Un PDF può essere associato a molti bandi tramite la tabella intermedia "BandiPDF".
  - Un PDF può essere associato a molte regole tramite la tabella intermedia "RegolamentoPdf".
- Esporta il modello per essere utilizzato in altre parti dell'applicazione.
*/

const Bandi = require("./Bandi")

module.exports = (sequelize, DataTypes) =>{
    const Pdf = sequelize.define("Pdf",{
        file_path:{
            type: DataTypes.STRING,
            allowNull:false,
            primaryKey:true,
        },
        preview:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    },
    {
        tableName: 'Pdfs',
    })
    Pdf.associate = (models) =>{
        Pdf.belongsToMany(models.Bando,
            {
            through:"BandiPDF",
            foreignKey:"file_path",
            otherKey:"ID_Bando"
            }
        )
        Pdf.belongsToMany(models.Regola,
            {
            through:"RegolamentoPdf",
            foreignKey:"file_path",
            otherKey:"ID_Regola"
            }
        )
    }

    return Pdf;
}