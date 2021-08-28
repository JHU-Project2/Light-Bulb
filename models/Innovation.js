const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Innovation extends Model {}

Innovation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    details: {
      type: DataTypes.STRING,
    },
    votes: {
      type: DataTypes.STRING,
      defaultValue: 0,
    },
    category: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'innovation',
  }
);

module.exports = Innovation;
