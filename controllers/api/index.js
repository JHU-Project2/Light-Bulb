const router = require('express').Router();
const userRoutes = require('./user-routes');
const innovationRoutes = require('./innovation-routes');
const commentRoutes = require('./comment-routes');
const utilsRoutes = require('./utils-routes');
router.use('/users', userRoutes);
router.use('/innovations', innovationRoutes);
router.use('/comments', commentRoutes);
router.use('/utils', utilsRoutes);
module.exports = router;