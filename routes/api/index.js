const router = require('express').Router();
const USERroutes = require('./user-routes');
const THOUGHTroutes = require('./thought-routes');

router.use("/users", USERroutes);
router.use("/thoughts", THOUGHTroutes);

module.exports = router;