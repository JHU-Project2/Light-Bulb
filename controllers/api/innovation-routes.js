const router = require('express').Router();
const { Innovation, User, Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    console.log('======================');
    Innovation.findAll({
        attributes: ['id',
            'title',
            'summary',
            'content',
            'image',
            'details',
            'votes',
            'user_id',
            'created_at'
        ],
        order: [
            ['created_at', 'DESC']
        ],
        include: [{
     model: User,
            attributes: ['username']
        },
        {
            model: Comment,
            attributes: ['id', 'comment_text', 'innovation_id', 'user_id', 'created_at'],
            include: {
                model: User,
                attributes: ['username']
            }
        }
        ]
    })
        .then(dbPostData => res.json(dbPostData.reverse()))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

});
router.get('/:id', (req, res) => {
    Innovation.findOne({
        where: {
               id: req.params.id
        },
        attributes: ['id',
            'content',
            'title',
            'summary',
            'image',
            'created_at',
            'details',
            votes,
            'user_id'

        ],

        include: [{
            model: User,
            attributes: ['username']
        },
        {
            model: Comment,
            attributes: ['id', 'comment_text', 'innovation_id', 'created_at', 'user_id'],
            include: {
                model: User,
                   attributes: ['username']
            }

        }
        ]
    })



    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No innovation found with this id' });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
          res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
Innovation.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
    Innovation.update({
    title: req.body.title,
            content: req.body.content
        }, {
            where: {
                id: req.params.id
            }
        }).then(dbPostData => {
            if (!dbPostData) {
                   res.status(404).json({ message: 'No innovation found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.delete('/:id', withAuth, (req, res) => {
    Innovation.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbPostData => {
        if (!dbPostData) {
    res.status(404).json({ message: 'No innovation found with this id' });
            return;
        }

    
        res.json(dbPostData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});



module.exports = router;
