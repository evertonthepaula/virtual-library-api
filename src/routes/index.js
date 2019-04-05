const routes = require('express').Router();
const multer = require('multer');

const multerConfigs = require('./config/multer');
const logger = require('./config/winston');

const MemberController = require('../controllers/MemberController');
const BookController = require('../controllers/BookController');
const AuthController = require('../controllers/AuthController');

routes.get('/members', MemberController.index);
routes.get('/members:id', MemberController.show);
routes.post('/members', MemberController.store);
routes.put('/members:id', MemberController.update);
routes.delete('/members:id', MemberController.destroy);

routes.post('/books', multer(multerConfigs).single('file'), BookController.store);

routes.post('/login', passport.authenticate('local') , AuthController.index)

routes.get('/', (req, res) => {
    logger.error("Hello World - there's no place like home");
    logger.warn("Hello World - there's no place like home");
    logger.info("Hello World - there's no place like home");

    return res.json({hello: 'Wolrd!'});
});

module.exports = routes;