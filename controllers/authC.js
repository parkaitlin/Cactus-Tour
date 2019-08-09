const User = require('../models/user');

module.exports = {
    newAccount: async (req, res)=>{
        if(req.body.password === req.body.confirmPassword){
            try{
                const newUser = await User.create(req.body);
                req.session.userDbId = newUser._id;
                res.json({
                    status: 200,
                    created: true,
                    message: 'Account created. Welcome to The Cactus Tour!',
                    user: newUser
                })
            } catch (error){
                res.json({
                    error: error,
                    message: 'An account with that email already exists.'
                })
            }
        } else {
            res.json({
                message: 'Passwords do not match.'
            })
        }
    },
    index: async (req, res)=>{
        try {
            const users = await User.find({})
            res.json({
                status: 200,
                users: users
            })
        } catch (error) {
            res.json({
                error: error
            })
        }
    },
    authorize: async (req, res)=>{
        try {
            const foundUser = await User.findOne({email: req.body.email})
            if(foundUser.validPassword(req.body.password)){
                req.session.userDbId = foundUser._id;

                res.json({
                    status: 200,
                    verified: true,
                    user: foundUser,
                    message: 'Login Successful'
                })
            } else {
                req.session.message = 'Unfortunately the login information provided, does not match our records. Please try again.'
                res.json({
                    data: 'Invalid Password',
                    message: req.session.message
                })
            }
        } catch (error) {
            res.json({
                error: error,
                message: 'Unfortunately the email provided, does not match any of our records. Please try again.'
            })
        }
    },
    logout: async (req, res)=>{
        try {
            req.session.destroy();
            res.json({
                messaged: 'You have successfully logged out.'
            })
        } catch (error){
            res.json({
                error: error
            })
        }
    }
}