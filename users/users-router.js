// import express 
const express = require('express')
// import user model
const Users = require('./users-model.js');
const restricted = require('../auth/authenticate-middleware.js');

// create the router 
const router = express.Router()

// endpoints
router.get('/', restricted, (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => res.send(err));
})


// export 
module.exports = router