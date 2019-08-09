const User = require('../models/user');

module.exports = {
    singleUser: async(req, res)=>{
        try {
            const foundUser = await User.findById(req.params.id);
            res.json({
                user: foundUser,
                status: 200
            })
            
        } catch (error) {
            res.json({
                error: error
            })
        }
    },
    update: async(req, res)=>{
        const user = await User.findById(req.params.id);        
        if(req.body.password && req.body.password === req.body.confirmPassword){
            user.password = user.hashPassword(req.body.password);
            user.save();
        }
        try { 
            delete req.body.password;
            const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
            res.json({
                status: 200,
                user: updatedUser
            });
        } catch (error) {
            res.json({
                error: error
            });
        };
    },
    delete: async(req, res)=>{
        try {
            await User.findByIdAndDelete(req.params.id);
            req.session.destroy();

        } catch (error) {
            res.json({
                error: error
            })
        }
    },
    upcoming: async(req, res)=>{
        try {
            const user = await User.findById(req.session.userDbId)
            .populate('registeredTours')
            .exec()
            res.json({
                allTours: user.registeredTours,
            })
        } catch (error) {
            res.json({
                error: error
            })
        }
    }
}