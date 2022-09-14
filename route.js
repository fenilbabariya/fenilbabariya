var express = require('express')
var router = express.Router();
var photo = require('./Model/photo')

router.get('/photos',async(req,res)=>{
    var iphoto = await photo.find();
    res.send(iphoto)
    // res.sendFile("index.html",{root:__dirname});
})

module.exports = router;
