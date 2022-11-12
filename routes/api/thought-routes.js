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