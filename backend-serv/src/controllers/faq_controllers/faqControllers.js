const { FaqQuestion, sequelize } = require("../../models");


exports.getFaqList = async (req, res) => {
  const { data } = req.query;
  console.log(!data);
  const risultati = await (!data
    ? FaqQuestion.findAll()
    : sequelize.query("SELECT * FROM FaqQuestions where question like :req", {
        replacements: { req: `%${data}%` },
        model: FaqQuestion,
        mapToModel: true,
      }));
  res.json(risultati);
};

exports.sendFaqQuestion = async(req,res) => {
    const qa = req.body
    FaqQuestion.bulkCreate(qa)
    res.json("Inserimento avvenuto")


}