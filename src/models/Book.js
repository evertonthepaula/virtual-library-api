const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    name:{
        type:  String,
        required: true,

    },
    path:{
        type:  String,
        required: true,
    },
    path:{
        type:  String,
        required: false,
    },
    status:{
        type: Boolean,
        required: true,
    },
    createdAtt: {
        type: Date,
        default: Date.now,
    }
});

mongoose.model('Book',  BookSchema);