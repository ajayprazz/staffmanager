var mongoose = require('mongoose');

const dbUrl = 'mongodb://127.0.0.1:27017/employee-management';

mongoose.connect(dbUrl,{
    useNewUrlParser:true
});

mongoose.connection.once('open',function(done){
    console.log('database connection successfull');
})

mongoose.connection.on('error',function(error){
    console.log('database connection error');
})