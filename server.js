
const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');

const port = process.env.PORT || 3000;

if(process.env.NODE_ENV === 'test') {
    mongoose.connect(
        "mongodb+srv://vijay:Vijasdf@cluster0-vhox9.mongodb.net/test?retryWrites=true",
        {useNewUrlParser: true}   
    ) 
} else {
    mongoose.connect(
        "mongodb+srv://vijay:Vijasdf@cluster0-vhox9.mongodb.net/trade_services?retryWrites=true",
        {useNewUrlParser: true}   
    ) 
}


const server = http.createServer(app);

server.listen(port);



// const MongoClient = require('mongodb').MongoClient;
// const url = "mongodb+srv://vijay:Vijasdf@cluster0-vhox9.mongodb.net/test?retryWrites=true";

