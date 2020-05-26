const mongoose= require('mongoose');
let Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const userSchema = new  mongoose.Schema({
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
    carnumber:{
        type:String,
        trim:true,
        require:true,
        unique:7
    },
    carmodel:{
        type:String,
        trim:true,
        require:true,
        maxlength:32
    },
    date:{
        type:Date,
        require:true,
    },
    location:{
        type:String,
        trim:true,
        require:true,
    },
    status:{
        type:Number,
        default:0 // '0 ' means case is not resolved '1' means case is resolved
    },
    users:{
        type:ObjectId,
        ref:"officer"
    }

},{timestamps:true}
);


module.exports = mongoose.model("user",userSchema);