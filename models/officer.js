const mongoose= require('mongoose');
let Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const officerSchema = new  mongoose.Schema({
    firstname:{
        type:String,
        trim:true,
        require:true,
        maxlength:32
    },
    lastname:{
        type:String,
        trim:true,
        require:true,
        maxlength:32
    },
    email:{
        type:String,
        trim:true,
        require:true,
        unique:32
    },
    phone_number:{
        type:Number,
        trim:true,
        require:true,
        unique:10
    },
    officer_status:{
        type:Number,
        default:0 // zero means officer is free to get his task
    },
    officers:{
        type:ObjectId,
        ref:"user"
    }
},{timestamps:true}
);


module.exports = mongoose.model("officer",officerSchema);