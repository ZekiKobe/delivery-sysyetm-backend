const userService = require('../services/userService');

exports.useRegistration = async (req,res) => userService.userRegistration(req,res);
exports.getAllUsers = async (req,res) => userService.getAllUsers(req,res);
exports.getUserById = async (req,res) => userService.getUserById(req,res);
exports.updateUser = async (req,res) => userService.updateUser(req,res);
exports.deleteUser =  async (req,res)=> userService.deleteUser(req,res);
exports.userLogin = async (req,res) => userService.userLogin(req,res);
exports.userLogout = async (req,res) => userService.userLogout(req,res);