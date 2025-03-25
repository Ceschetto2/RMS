module.exports = (sequelize, DataTypes) => {
    const FaqQuestions = sequelize.define("FaqQuestions", {
        question: {
            type:DataTypes.STRING,
            allowNull:false,


        },
        answare:{
            type:DataTypes.STRING,
            allowNull:false,

        },

    })
    return FaqQuestions;
};