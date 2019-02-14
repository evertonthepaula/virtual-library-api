const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    name:{
        type:  String,
        required: true,
    },
    size:{
        type:  String,
        required: true,
    },
    path:{
        type:  String,
        required: true,
    },
    url:{
        type:  String,
        required: true,
    },
    status:{
        type: Boolean,
        default: true,
    },
    createdAtt: {
        type: Date,
        default: Date.now,
    }
});

mongoose.model('Book',  BookSchema);