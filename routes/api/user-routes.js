const router = require('express').Router();
const { 
    getUSERbyID,
    ALLusers,
    CREATEuser,
    UPDATEuser,
    DELETEuser,
    ADDfriend,
    DELETEfriend,
} = require('../../controllers/user-controller');

router.route('/').get(ALLthoughts).post(CREATEuser);
router.route('/:id').get(getUSERbyID).put(UPDATEuser).delete(DELETEuser);
router.route('/userID/friends/:friendID');

module.exports = router;