// const jwt = require("jsonwebtoken")

// const verifyToken = (req,res,next)=>{
//     const token = req.cookies.access_token;
//     if(!token){
//         return next(res.status(401).send("You are not autenticated"))
//     }
//     jwt.verify(token,process.env.JWT,(err,user)=>{
//         if(err){
//             return next(res.status(403).send("Token is not valid"))
//         }
//         req.user = user
//         next()
//     })
// }

// module.exports = verifyToken

