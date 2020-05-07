var express = require('express');
var app = express();

require('./config/db');

var cors = require('cors');
app.use(cors());

var morgan = require('morgan');
app.use(morgan('dev'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(bodyParser.json());

var registrationRoute = require('./controllers/registration')();

app.use('/registration',registrationRoute);

app.use(function(err,req,res,next){
    res.status(err.status || 400).json(err);
});


app.listen(4040,function(err,done){
    if(err){
        console.log('server listening failed');
    }else{
        console.log('server listening at port 4040');
    }
})