const express = require('express');
const routes = express.Router();

const MembersController = require('../controllers/MemberController');

routes.get('/members', MembersController.index);
routes.get('/members:id', MembersController.show);
routes.post('/members', MembersController.store);
routes.put('/members:id', MembersController.update);
routes.delete('/members:id', MembersController.destroy);

module.exports = routes;
