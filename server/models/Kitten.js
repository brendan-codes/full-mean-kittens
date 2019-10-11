let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let kittenSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, "Name must be longer than 2"]
    },
    desc: String,
    age: {
        type: Number,
        required: true
    }
}, {timestamps: true});


mongoose.model('Kitten', kittenSchema);
