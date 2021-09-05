const { User } = require('../models');

const userData = [{
        username: 'Joe',
        password: 'joe'

    },
    {
        username: 'Jack',
        password: 'jack'
    },
    {
        username: 'Jill',
        password: 'jill'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;