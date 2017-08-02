var express     = require('express'),
    bodyParser  = require('body-parser'),
    path        = require('path'),
    mongoose    = require("mongoose"),
    Forest      = require("../src/models/forest"),
    React       = require('react'),
    app         = express();

var port = 1337;

var mongoDB = 'mongodb://localhost/dispersed';
mongoose.connect(mongoDB, { useMongoClient: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

Forest.create({
  name: 'whiskey Falls',
  image: 'https://farm7.staticflickr.com/6014/6015893151_044a2af184.jpg',
  description: 'This is a place with whiskey in the falls, its a great place',
  usfs: 'http://www.google.com'
  }, function(err, forest){
    if(err){
        console.log(err);
    }
    else{
        console.log("New forest create")    
        console.log(forest);
    }
  }
);

app.use(express.static(path.join(__dirname, '..','build')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.get('/', function(req, res) {
    res.send('Index Route');
});

var server = app.listen(port);
console.log('Listening on port ' + port);