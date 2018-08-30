var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    naam: {type: String, required: true},
    totaalprijs: {type: Number, required: true},
    korting: {type:Number, required:true},
    pakketid: {type: Number, required: true}
});
schema.plugin(mongooseUniqueValidator);
module.exports =  mongoose.model('pakket', schema);