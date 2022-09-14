var mongoose = require('mongoose');

var movieSchema = mongoose.Schema({
    albumId:Number,
    id:Number,
    title:String,
    url:String,
    thumbnailUrl:String
})

module.exports = mongoose.model("movie",movieSchema);
