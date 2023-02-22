const User = require('../models/Users.Models')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const AsyncErrorHandler = require("express-async-handler")
const {sendJwtToClient} = require("../Helpers/auth/token.helpers")
const { validateInput } = require('../Helpers/auth/input.helpers')

const postUser = AsyncErrorHandler(async(req,res,next)=>{
    const{
        username,
        email,
        password,
        isAdmin,
        gender,
        userWishList,
        userCheckout,
        userCard,
    } = req.body

    const user = await User.create({
        username,
        email,
        password,
        isAdmin,
        gender,
        userWishList,
        userCheckout,
        userCard,
    });
    sendJwtToClient(user,res)
})
// const register = async (req, res, next) => {
//     try {
//         const salt = bcrypt.genSaltSync(10);
//         const hash = bcrypt.hashSync(req.body.password, salt);
//         const newUser = new User({
//             username: req.body.username,
//             email: req.body.email,
//             password: hash,
//             isAdmin : req.body.isAdmin
//         })
//         await newUser.save()
//         res.status(200).send("User has been created")
//     } catch (err) {
//         next(err)
//     }
// }

const login = AsyncErrorHandler(async(req,res,next) => {
    const {email,password} = req.body
    if(!validateInput(email,password)){
        return next(res.status(400).json({
            success:false,
            message:"Wrong password or email"
        }))
    }
    const user = await User.findOne({email}).select('+password');
    if(password !==user.password){
        return next(res.status(400).json({
            success:false,
            message:"Wrong password"
        }))
    }
    sendJwtToClient(user,res)
})

module.exports = {
    postUser,login
}