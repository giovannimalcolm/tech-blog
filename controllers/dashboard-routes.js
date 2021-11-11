const router = require('express').Router();
const {Post} = require('../models/');

//need route to only get the USERS projects
router
    .get('/', async (req, res) => {
        try {
            const postData = await Post.findAll({
                include: [
                    {
                        model: User,
                        attributes: ['name'],
                    },
                ],
            }),
            const posts = postData.map((post) => post.get({ plain: true }));
            res.render('main', {
                posts,
                logged_in: req.session.logged_in

            });
        } catch (err) {
            res.status(500).json(err);
        }
    });








router
    .get('/', async (req, res) => {


    }


    router
    .get('/dashboard', async (req, res) => {


    }



    module.exports = router;