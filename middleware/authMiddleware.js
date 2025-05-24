const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.authenticate = async (req,res,next) =>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split('')[1];
    
if (!token){
  return res.status(401).json({message:'unauthorized access'});
}
  
try {
  const decoded= jwt.verify(token,process.env.JWT_SECRET);
  const user= User.findById(decoded.id);
  if(!user){
    return res.status(401).json({message:'unauthorized access'});
  }
  req.user = user;
  req.user.role = user.role;
  next();
  
} catch (error) {
  return res.status(403).json({message:'invalid token'});
}
   
};


exports.authorization = (...allowedRoles) => {
  return (req, res, next) => {
    try {
      const userRole = req.user?.role; // get the user's role safely
      
      if (!userRole) {
        return res.status(401).json({ message: 'Unauthorized - No role found' });
      }

      if (!allowedRoles.includes(userRole)) {
        return res.status(403).json({ message: 'Forbidden - Access denied' });
      }

      next(); // user is authorized
    } catch (error) {
      console.error('Authorization error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
};
