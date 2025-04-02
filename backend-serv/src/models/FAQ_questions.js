/* 
Il file FAQ_questions.js definisce il modello FaqQuestion per interagire con la tabella "FaqQuestions" nel database.
- Campi definiti:
  - question: stringa obbligatoria che rappresenta la domanda.
  - answare: stringa obbligatoria che rappresenta la risposta associata alla domanda.
  - ID_Utente: chiave esterna che fa riferimento alla tabella "Utenti".
- Configura il nome della tabella come "FaqQuestions".
- Associazioni:
  - Ogni domanda FAQ appartiene a un utente tramite la chiave esterna "ID_Utente".
- Esporta il modello per essere utilizzato in altre parti dell'applicazione.
*/

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
