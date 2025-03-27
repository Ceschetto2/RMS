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