const express = require('express');
const router = express.Router();

// @route    POST api/auth
// @desc     Test Auth
// @access   Public

router.get('/', (req, res) => res.send('Auth route'));
module.exports = router;
