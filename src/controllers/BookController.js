const mongoose = require('mongoose');
const Book = mongoose.model('Book');

module.exports = {
    async index(req, res) {
        const books = await Book.find();

        return res.json(books);
    },

    async show(req, res){
        const book = await Book.findById(req.params.id);

        return res.json(book);
    },

    async store(req, res){
        const {originalname: name, size, path: filename} = res.file

        const book = {
            name,
            size,
            path,
            url:'',
        }

        const book = await Book.create(book);

        return res.json(book);
    },

    async update(req, res){
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(book);
    },

    async update(req, res){
        await Book.findByIdAndRemove(req.params.id);

        return res.send();
    },
}