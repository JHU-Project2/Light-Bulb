const router = require('express').Router();
const userRoutes = require('./user-routes');
const innovationRoutes = require('./innovation-routes');
const commentRoutes = require('./api/comment-routes');
router.use('/users', userRoutes);
router.use('/innovation', innovationRoutes);
router.use('/comments', commentRoutes);

module.exports = router;