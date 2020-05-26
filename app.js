const express = require('express')
require('dotenv').config();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const port = process.env.PORT || 8000




// import routes
const complain = require('./routes/user')
const register = require('./routes/officer')



// our app
const app = express();


//database connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser :true,
    useCreateIndex:true,
    useUnifiedTopology: true
})
.then(()=> console.log('Db connected'))
.catch(err=>{
    console.log(err);
});


//middleware
app.use(morgan('dev'));
app.use(bodyparser.json())



//route middleware
app.use('/api',complain);
app.use('/api',register);



app.get('/',(req,res)=>{
    res.send('Your backend is working fine...');
});


app.listen(port,()=>{
    console.log(`server started at ${port} `);
})