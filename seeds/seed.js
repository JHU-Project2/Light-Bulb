const sequelize = require('../config/connection');
const { User, Innovation, Comment } = require('../models');

const userData = require('./userData.json');
const innovationData = require('./innovationData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const innovations = await Innovation.bulkCreate(innovationData, {
    individualHooks: true,
    returning: true,
  });

  const comments = await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
