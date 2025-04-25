const userController = require('../controller/userController');
const express = require('express');
const router = express.Router();
const {authenticationMiddleware,authorizationMiddleware} = require('../middleware/authMiddleware');
const ROLES = require('../utils/roles');

router.post('/register',userController.useRegistration);
router.get('/allUsers',userController.getAllUsers);
router.get('/user/:id',userController.getUserById);
router.put('/update/:id',userController.updateUser);
router.delete('/delete/:id',userController.deleteUser);
router.post('/login',authorizationMiddleware(ROLES.ADMIN,ROLES.USER,ROLES.DRIVER),userController.userLogin);
router.post('/logout',authenticationMiddleware,userController.userLogout);

module.exports = router;