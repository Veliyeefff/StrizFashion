const express = require("express")
const router = express.Router()

const {GetUsers,GetUserById,PostUser,DeleteUser,UpdateUser} = require('../controllers/User.Controller')
// const verifyToken = require("../utils/verifyToken")
//GetUsers
router.get("/",GetUsers)

//GetUserById
router.get("/:id",GetUserById)

//POST
// router.post("/",PostUser)

//DELETE
router.delete("/:id",DeleteUser)

//UPDATE
router.put("/:id",UpdateUser)


// router.get('/checkauthentification',verifyToken,(req,res,next)=>{
//     res.send("Hello user you are logged in")
// })

module.exports = router