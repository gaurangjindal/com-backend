const User = require('../models/user');
const Officer = require('../models/officer');

const {getRandomId} = require('../utils/random');

exports.complainsubmit =(req,res)=>{
    const user = new User(req.body);
    
    // fetching all officer to whom task i not assigned
    Officer.find({officer_status:0}).exec((err,officer)=>{

       
        if(err){
            return res.status(400).json({
                error:`${err}`
            })
        }   
        
            const officerToAssigned = officer;
            const randomValue = getRandomId(officerToAssigned.length);
            const assigneOfficer = officerToAssigned[randomValue];

            if(officer._id === 'undefined'){
                 console.log('not working');
            }
            else{
                user.users = assigneOfficer._id;
                 assigneOfficer.officers = user._id;
                 assigneOfficer.officer_status = 1; // He is now busy and cannot work furthure;
                 assigneOfficer.save(); 
                 
            }
              
 
    })
    
    // register complain
    user.save((err,user)=>{
        if(err){
            return res.status(400).json({
                err
            })
        }
        res.json({
            user
        })
        
    })
    
}
// officer updating the status of complain
exports.update =(req,res)=>{
    Officer.find({officer_status:1}).exec((err,officer)=>{
        if(err){
            return res.status(400).json({
                error:`${err}`
            })
        }

        const officerAssigned = officer;
        officerAssigned.officer_status = 0; // He is now free and cannot work furthure;
       
       officerAssigned.officers = undefined;
       console.log(officerAssigned);
       

        res.json({
            officer
        })
        


    })
}



// getting the list of all complains
exports.getList = (req,res)=>{
    User.find({}).exec((err,data)=>{
        if(err){
            return res.status(400).json({
                error:`${err}`
            })
        }
        res.json({
            data
        })
    })
}