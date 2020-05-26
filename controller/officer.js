const Officer = require('../models/officer');
const User = require('../models/user');

// officer registration
exports.registerofficer=(req,res)=>{
    
    const officer = new Officer(req.body);

    officer.save((err,officer)=>{
        if(err){
            return res.status(400).json({
                err
            });
        }
        res.json({
            officer
        })
        

    })    
}
// fetching all the officer details as list
exports.readOfficer =(req,res)=>{
    Officer.find({},function(err,data){
        if(err){
            return res.status(400).json({
                err
            })
        }
        res.json({
            data
        })
    })
}