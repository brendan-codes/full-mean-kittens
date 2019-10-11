let kittens = require('./../controllers/kittens');

module.exports = function(app){

    app.get('/kittens', kittens.index);
    app.post('/kittens', kittens.create);


};