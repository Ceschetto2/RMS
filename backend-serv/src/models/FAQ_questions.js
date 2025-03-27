module.exports = (sequelize, DataTypes) => {
  const FaqQuestion = sequelize.define(
    "FaqQuestion",
    {
      question: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      answare: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ID_Utente: {
        type: DataTypes.INTEGER,
        references: {
          model: "Utenti",
          key: "ID_Utente",
        },
      },
    },
    {
      tableName: "FaqQuestions",
    }
  );
  FaqQuestion.associate = (models) => {
    FaqQuestion.belongsTo(models.Utente, {
      foreignKey: "ID_Utente",
    });
  };
  return FaqQuestion;
};
