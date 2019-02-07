const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
    name:{
        type:  String,
        required: true,

    },
    cpf:{
        type: Number,
        required: true,

    },
    rg:{
        type: Number,
        required: true,

    },
    address:{
        type: String,
        required: true,

    },
    birthday:{
        type: Date,
        required: true,

    },
    entrada:{
        type: Date,
        required: true,

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

mongoose.model('Member',  MemberSchema);