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
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
            if(req.body.password){
                updatedUser.password = updatedUser.hashPassword(req.body.password);
                updatedUser.save();
            };
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
            const deletedUser = await User.findByIdAndUpdate(req.params.id);
            req.session.destroy();

        } catch (error) {
            res.json({
                error: error
            })
        }
    },
    upcoming: async(req, res)=>{
        console.log('upcoming');
        try {
            const user = await User.findById(req.session.userDbId)
            .populate('registeredTours')
            .exec()
            console.log(user);
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