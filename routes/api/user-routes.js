const router = require('express').Router();
const { 
    getUSERbyID,
    ALLthoughts,
    CREATEuser,
    UPDATEuser,
    DELETEuser,
    ADDfriend,
    DELETEfriend,
} = require('../../controllers/user-controller');

router.route('/').get(ALLthoughts).post(CREATEuser);
router.route('/:id').get(getUSERbyID).put(UPDATEuser).delete(DELETEuser);