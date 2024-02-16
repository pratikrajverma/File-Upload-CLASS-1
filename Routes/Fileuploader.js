const express = require('express');
const router = express.Router();

const {localFileUpload } = require('../controller/fileupload');
 
//api routes
router.post('/localFileUpload', localFileUpload);
module.exports = router;   

