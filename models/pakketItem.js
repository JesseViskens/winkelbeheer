var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    pakketid: {type: Number, required: true},
    naam: {type: String, required: true},
    aantal: {type: Number, required: true}
});
schema.plugin(mongooseUniqueValidator);
module.exports =  mongoose.model('pakketItem', schema);