let mongoose = require('mongoose');
let Kitten = mongoose.model('Kitten');

module.exports = {
    index: function(req, res){
        Kitten.find()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    create: function(req, res){
        Kitten.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
};