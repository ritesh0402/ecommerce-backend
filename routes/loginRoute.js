const express = require('express');
const router = express.Router();
const wrapAsync = require('../utility/wrapAsync');
const checkCred = require('../utility/checkCred');
const checkLoginReq = require('../middlewares/checkLoginReq');


router.post("/", checkLoginReq, wrapAsync(checkCred));



module.exports = router;