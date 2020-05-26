const express= require('express');
const router = express.Router();

const {registerofficer} = require('../controller/officer')

router.post('/register',registerofficer);





module.exports = router;