const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const message = req.body.message;


    const newUser = new User({
        firstname, 
        lastname, 
        email, 
        message,
    });

    newUser.save()
    .then(() => res.json('User info sent'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router; 