const { FaqQuestions, sequelize } = require("../../models");

const { QueryTypes } = require("sequelize");

exports.getFaqList = async (req, res) => {
  const { data } = req.query;
  console.log(!data);
  const risultati = await (!data
    ? FaqQuestions.findAll()
    : sequelize.query("SELECT * FROM FaqQuestions where question like :req", {
        replacements: { req: `%${data}%` },
        model: FaqQuestions,
        mapToModel: true,
      }));
  res.json(risultati);
};

exports.sendFaqQuestion = async(req,res) => {
    const qa = req.body
    FaqQuestion.bulkCreate(qa)
    res.json("Inserimento avvenuto")


}