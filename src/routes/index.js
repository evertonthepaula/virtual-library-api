const routes =  require('express').Router();
const multer = require('multer');
const multerConfigs = require('./config/multer');

const MemberController = require('../controllers/MemberController');
const BookController = require('../controllers/BookController');

routes.get('/members', MemberController.index);
routes.get('/members:id', MemberController.show);
routes.post('/members', MemberController.store);
routes.put('/members:id', MemberController.update);
routes.delete('/members:id', MemberController.destroy);

routes.post('/books', multer(multerConfigs).single('file'), BookController.store);

routes.get('/', (req,res) =>{
    console.log('hello Wolrd!');

    return res.json({hello: 'Wolrd!'});
});

module.exports = routes;