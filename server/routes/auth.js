const router = require('express').Router();
const {RegisterUser} = require("../controllers/auth/RegisterUser");
const {LoginUser} = require("../controllers/auth/LoginUser");
// const { body } = require('express-validator')

router.post('/register',
 async (req, res) => {
    await RegisterUser(req, res);
})

router.post('/logic',
 async (req, res) => {
    await LoginUser(req, res);
})

module.exports = router;
