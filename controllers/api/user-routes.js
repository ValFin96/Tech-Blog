const router = require('express').Router();
const { User } = require('../../models');

// The `/api/users` endpoint

// router.get('/:id', async (req, res) => {
//     // find one user by its `id` value including all jobs applied by that user

//     try {
//         const userData = await User.findByPk(req.params.id);


//         if (!userData) {
//             res.status(404).json({ message: 'No User found with this id!' });
//             return;
//         }

//         res.status(200).json(userData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        console.log(req.body)
        const userData = await User.findOne({ where: { username: req.body.username } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            // res.json({ user: userData, message: 'You are now logged in!' });
            res.status(200).json({ user: userData, message: "You are logged in!" })
        });
    } catch (err) {
        res.status(400).json(err);
    }
});


router.post('/logout', (req, res) => {
    console.log(req.session.logged_in, "Logout route")
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;