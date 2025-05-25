module.exports = (sequelize, DataTypes)=> { 
    const Events = sequelize.define("Events", {
        event_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        start_date: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        end_date: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        all_day: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        location: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        createdBy: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            references: {
                model: "Users",
                key: "user_id"
            }
        }
    }, {
        tableName: 'Events',
    });

    Events.associate = (models) => {
        Events.belongsTo(models.Users, {
            foreignKey: "createdBy",
        });
    };

    return Events;
    

}