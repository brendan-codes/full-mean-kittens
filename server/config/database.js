let fs = require('fs');
let mongoose = require('mongoose');
let path = require('path');

mongoose.connect('mongodb://localhost:27017/kittens', {useNewUrlParser: true, useUnifiedTopology: true});

// require('./../models/Kitten');

let models_path = path.join(__dirname, './../models')

fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js') >= 0) {
        require(models_path + "/" + file);
    };
})