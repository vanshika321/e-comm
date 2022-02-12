const User =require("../model/user")

exports.Signup=async (req,res)=>{
    const user=await User.create(req.body)
    res.status(201).json({
        message:"success",
        user
    })
}
exports.login=async (req,res)=>{
    const {email,password}=req.body
    // if(!email||!password)
    if(await User.findOne(email)){
        res.status.json({
            status:"success"
        })
    }
}