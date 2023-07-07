const express = require('express');
const router = express.Router();
const wrapAsync = require('../utility/wrapAsync');
const createUser = require('../utility/userCtrl');
const checkRegisterReq = require('../middlewares/checkRegisterReq');

router.post("/", checkRegisterReq, wrapAsync(createUser));



module.exports = router;