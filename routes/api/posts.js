const express = require('express');
const router = express.Router();

// @route    POST api/posts
// @desc     Test posts
// @access   Public

router.get('/', (req, res) => res.send('Posts route'));
module.exports = router;
