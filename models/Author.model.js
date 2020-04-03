const shortid = require('shortid');
console.log(shortid.generate());
// PPBqWA9

  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var authorSchema = new Schema({
    _id: {
        'type': String,
        'default': shortid.generate
      },
    title: { type : String,required:true},  
  }
  
  );

  module.exports = mongoose.model('Authors', authorSchema);