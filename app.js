var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose=require('mongoose');

var appRoutes = require('./routes/app');
var stockRoutes = require('./routes/stock');
var leveranciersRoutes = require('./routes/leverancier');
var pakketRoutes = require('./routes/pakket');
var pakketItemRoutes = require('./routes/pakketItem');
var orderRoutes = require('./routes/order');
var orderItemRoutes = require('./routes/orderitem');

var app = express();
mongoose.connect('admin:Moerstraat47@ds235302.mlab.com:35302/angular_project');
//mongoose.connect('localhost:27017/node-angular');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});
app.use('/leveranciers', leveranciersRoutes);
app.use('/stock', stockRoutes);
app.use('/pakket', pakketRoutes);
app.use('/pakketitems',pakketItemRoutes);
app.use('/order', orderRoutes);
app.use('/orderitems', orderItemRoutes);
app.use('/', appRoutes);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
    return res.render('index');
});


module.exports = app;
