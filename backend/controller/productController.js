const Products= require("../model/ProductModel.js")
exports.getAllProduct=async(req,res,next)=>{
    try{
        const AllProducts=await Products.find()
        res.status(200).json({
            status:"success",
            AllProducts
        })
    }
    catch(err){
        res.status(404).json({
            status:"Something went wrong",
            message:err.message

        })
    }
}

// exports.postProduct=async (req,res)=>{
//     try{
//         const Product= await Products.create(req.body)
//         res.status(200).json({
//             message:"success",
           

//         })
//         }
//     catch(err){
//         res.status(404).json({
//             message:err.message
//         })
//     }

// }

exports.postProduct=async (req,res)=>{
    try{
    
    // const newProduct=new Products()
    // newProduct.save({
    //     name: req.body.name,
    //     price:req.body.price
    // })
    

        const newTour=await Products.create(req.body)
        res.status(201).json({
            status:'success',
            data:{
                tour:newTour
            }
        })}
        catch(err){
            res.status(404).json({
                status:'fail',
                message:err.message

            })
        }
    }

exports.getOneProduct=async(req,res)=>{
    try{
        const Product= await Products.findById(req.params.id)
        res.status(200).json({
            status:"success",
            Product
        })
    }
    catch(err){
        res.status(404).json({
           status:"falied",
           message:err.message
        })
    }

}

exports.UpadateProduct=(req,res)=>{
    try{
        Products.FindByIdAndUpdate(req.params.id,req.body),{
            new:true,
            runValidators:true
            
        }
        res.status(200).json({
            status:"failed",
            message:err.message
        })
    }
    catch(err){
        res.status(404).json({
            status:"falied",
            message:err.message
         })
    }
}
// exports.deleteProduct=(req,res)=>{
//     try{
//         Products.findByIdAndDelete(req.params.id)
//     }
//     catch(err){
//         res.status(404).json({
//             status:"falied",
//             message:err.message
//          })
//     }
// }
exports.deleteProduct=async (req,res)=>{
    try{
     await Products.findByIdAndDelete(req.params.id)
     res.status(204).json({
         status:'success',
         data:null
     })
   
}
catch(err){
    res.status(404).json({
        status:"fail",
        message:err.message
    }) 
}
}