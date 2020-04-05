const shortid = require('shortid');
console.log(shortid.generate());
// PPBqWA9

  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var articleSchema = new Schema({
    _id: {
        'type': String,
        'default': shortid.generate
      },
    title: { type : String,required:true},  // String is shorthand for {type: String}
    dateCreated: { type: Date, default: Date.now, required:true },
    content: { type : String,required:true},
    author :  { type : String, required : true, ref : 'Authors' },
    category : { type : String, required : true, ref : 'Categorie' }
  }, {collection:'Articles'});
  module.exports = mongoose.model('Articles', articleSchema);