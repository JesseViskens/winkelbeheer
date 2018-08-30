var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    orderid: {type: Number, required: true},
    besteller: {type: String, required: true},
    betaalstatus: {type: Boolean, required: true},
    datum: {type:String, required:true},
    vorderstatus: {type:Boolean, required:true}
});
schema.plugin(mongooseUniqueValidator);
module.exports =  mongoose.model('order', schema);
