const User = require('./User');
const Innovation = require('./Innovation');
const Comment = require('./Comment');

User.hasMany(Innovation, {
    foreignKey: 'user_id'
});
Innovation.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Comment.belongsTo(Innovation, {
    foreignKey: 'innovation_id',
    onDelete: "cascade"
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Innovation.hasMany(Comment, {
    foreignKey: 'innovation_id',
    onDelete: "cascade"
})
module.exports = { User, Innovation, Comment };