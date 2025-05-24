const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.userRegistration = async (req,res) =>{
    const {name,email,phone,role,password} = req.body;
    try {
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:'User already'});
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new User({
            name,
            email,
            phone,
            role,
            password:hashedPassword
        });
        await newUser.save();
        const token = jwt.sign({id:newUser._id},process.env.JWT_SECRET,{expiresIn:'1h'});
        res.status(201).json({
            message:'User registered successfully'
        });
    } catch (error) {
        res.status(500).json({
            message:'Server error',
            error:error.message
        })
    }
};
exports.getAllUsers = async (req,res) =>{
    try {
        const users = await User.find();
        res.status(200).json(users);
        
    } catch (error) {
        res.status(500).json({
            message:'Server error',
            error:error.message
        })

    }
};
exports.getUserById = async (req,res) =>{
    const {id} = req.params;
    try {
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({message:
                'User not found'
            })
        }
        res.status(200).json(user);
    
        
    } catch (error) {
        res.status(500).json({
            message:'Server error',
            error:error.message
        })
    }
};

exports.updateUser = async (req,res) =>{
    const {id} = req.params;
    const {name,email,phone} =req.body;
    try {
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({message:
                'User not found'
            });
        }
        user.name = name || user.name;
        user.email = email || user.email;
        user.phone = phone || user.phone;
        await user.save();
        res.status(200).json({
            message:'User updated successfully'
        });

        
    } catch (error) {
        res.status(500).json({
            message:'Server error',
            error:error.message
        });
    }

};
exports.deleteUser = async (req,res) =>{
    const {id} = req.params;
    try {
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({message:
                'User not found',   
            });
        }
        await user.deleteOne();
        res.status(200).json({
            message:'User deleted successfully'
        });

        
    } catch (error) {
        res.status(500).json({
            message:'Server error',
            error:error.message
        })
    }
};
exports.userLogin = async (req,res) =>{
    const {email,password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({message:
                'User not found'
            });

        }
        const isPasswordValid = await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            return res.status(400).json({message:
                'Invalid password'
            });
        }
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1h'});
        res.status(200).json({
            message:'User Logged in successfully',
            token,
            user:{
                id:user._id,
                name:user.name,
                email:user.email,
                phone:user.phone,
                role:user.role
            }
        });

        
    } catch (error) {
        res.status(500).json({
            message:'Server error',
            error:error.message
        })
    }
};
exports.userLogout = async (req,res) =>{
    try {
        res.clearSessionStorage('token');
        res.status(200).json({
            message:'User Logged out successfully'
        });

        
    } catch (error) {
        res.status(500).json({
            message:'Server error',
            error:error.message
        })
    }
};