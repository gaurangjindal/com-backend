const express= require('express');
const router = express.Router();

const {complainsubmit,update,getList} = require('../controller/complain')
const {readOfficer} = require('../controller/officer')


router.post('/submit',complainsubmit);
router.get('/list',getList);
router.get('/read',readOfficer);

router.post('/update',update)








module.exports = router;