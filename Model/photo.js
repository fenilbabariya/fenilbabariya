var mongoose = require('mongoose');

var photoSchema = mongoose.Schema({
    albumId:Number,
    id:Number,
    title:String,
    url:String,
    thumbnailUrl:String
})

module.exports = mongoose.model("photo",movieSchema);
