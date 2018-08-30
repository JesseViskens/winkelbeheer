var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    naam: {type: String, required: true},
    stuks: {type: String, required: true},
    individueleprijs: {type: String, required: true, unique: true}
});
schema.plugin(mongooseUniqueValidator);
module.exports =  mongoose.model('stock', schema);