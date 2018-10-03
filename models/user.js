var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var personSchema = new mongoose.Schema({
  name: {
  	type:String,
  	required:true
  },
   nickname: {
  	type:String,
  	required:true
  },
  password1: {
  	type:Number,
  	required:true
  },
  password2: {
  	type:Number,
  	required:true
  },
  phone: {
  	type:Number,
  	required:true
  }

});

// var person = mongoose.model('person', personSchema);
module.exports = mongoose.model('person', personSchema);