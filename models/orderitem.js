var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    orderid: {type: Number, required: true},
    naam: {type: String, required: true},
    aantal: {type: Number, required: true},
    eenheidsprijs: {type:Number, required:true},
    totaalprijs: {type:Number, required:true},
});
schema.plugin(mongooseUniqueValidator);
module.exports =  mongoose.model('orderitem', schema);

