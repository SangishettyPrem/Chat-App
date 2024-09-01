const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Server is running on the localhost:5000');
})

module.exports = router;