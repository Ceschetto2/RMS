module.exports = (sequelize, DataTypes) => {
    const FaqQuestion = sequelize.define("FaqQuestions", {
        question: {
            type:DataTypes.STRING,
            allowNull:false,


        },
        answare:{
            type:DataTypes.STRING,
            allowNull:false,

        },

    },
    {
        tableName: 'FaqQuestions',
    })
    return FaqQuestion;
};