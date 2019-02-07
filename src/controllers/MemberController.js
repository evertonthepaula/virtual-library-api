const mongoose = require('mongoose');
const Member = mongoose.model('Member');

module.exports = {
    async index(req, res) {
        const members = await Member.find();

        return res.json(members);
    },

    async show(req, res){
        const member = await Member.findById(req.params.id);

        return res.json(member);
    },

    async store(req, res){
        const member = await Member.create(req.body);

        return res.json(member);
    },

    async update(req, res){
        const member = await Member.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(member);
    },

    async update(req, res){
        await Member.findByIdAndRemove(req.params.id);

        return res.send();
    },
}