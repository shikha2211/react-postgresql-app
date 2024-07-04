const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Actor = sequelize.define('actor', {
    actor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_update: {
        type: DataTypes.DATE,
        allowNull: false
    },
},
    {
        tableName: 'actor',
        timestamps: false
    }
);

module.exports = Actor;