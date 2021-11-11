const router = require('express').Router();

const postRoutes = require('./post-routes');
const userRoutes = require('./user-routes.js');
const commentRoutes = require ('./comment-routes.js');

router.use('/', postRoutes);
router.use('/dashboard', userRoutes);
router.use('/api', commentRoutes);

module.exports = router;
