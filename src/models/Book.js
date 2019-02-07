const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
    name:{
        type:  String,
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