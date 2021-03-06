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
    },
    status:{
        type: Boolean,
        default: true,
    },
    tags:{
        type: Array,
    },
    createdAtt: {
        type: Date,
        default: Date.now,
    }
});

mongoose.model('Book',  BookSchema);