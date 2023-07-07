const express = require('express');
const router = express.Router();
// const wrapAsync = require('../utility/wrapAsync');


router.post("/", (req, res) => {
   req.session.destroy();
   res.send('logged out!!!')
});



module.exports = router;