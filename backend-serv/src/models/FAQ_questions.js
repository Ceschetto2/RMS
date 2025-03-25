module.exports = (sequelize, DataTypes) => {
    const FaqQuestion = sequelize.define("FaqQuestion", {
        question: {
            type:DataTypes.STRING,
            allowNull:false,


        },
        answare:{
            type:DataTypes.STRING,
            allowNull:false,

        },

    })
    return FaqQuestion;
};