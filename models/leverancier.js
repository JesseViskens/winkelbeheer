var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    naam: {type: String, required: true},
    datum: {type: String, required: true},
    bedrag: {type: String, required: true},
    beschrijving :{type: String}
});
schema.plugin(mongooseUniqueValidator);
module.exports =  mongoose.model('Leverancier', schema);