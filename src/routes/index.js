const routes =  require('express').Router();
const multer = require('multer');
const multerConfigs = require('./config/multer');

const MembersController = require('../controllers/MemberController');

routes.get('/members', MembersController.index);
routes.get('/members:id', MembersController.show);
routes.post('/members', MembersController.store);
routes.put('/members:id', MembersController.update);
routes.delete('/members:id', MembersController.destroy);

routes.post('/upload', multer(multerConfigs).single('file'), (req, res) => {
    console.log(req.file);
    
    return res.json();
});

module.exports = routes;
