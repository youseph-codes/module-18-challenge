const router = require("express").Router();
const APIroutes = require('./api');

router.use('/api', APIroutes);

router.use((req, res) => {
    res.status(404).send('<h1> 404 Error!</h1>');
});

module.exports = router;