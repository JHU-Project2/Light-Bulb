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
      type: DataTypes.TEXT,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.STRING,
    },
    details: {
      type: DataTypes.TEXT,
    },
    votes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
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
