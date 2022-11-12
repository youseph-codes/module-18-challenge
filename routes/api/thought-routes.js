const router = require('express').Router();
const { 
    getTHOUGHTbyID,
    ALLthoughts,
    CREATEthought,
    UPDATEthought,
    DELETEthought,
    CREATEreaction,
    DELETEreaction,
} = require('../../controllers/thought-controller');

router.route('/').get(ALLthoughts).post(CREATEthought);
router.route('/:id').get(getTHOUGHTbyID).put(UPDATEthought).delete(DELETEthought);
router.route('/:thoughtID/reactions').post(CREATEreaction);
router.route('/:thoughtID/reactions').delete(DELETEreaction);

module.exports = router;