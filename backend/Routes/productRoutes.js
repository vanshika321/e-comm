const express=require("express")
const router=express.Router();
const productController=require("../Controller/productController")


router
.route('/')
.get(productController.getAllProduct)
.post(productController.postProduct)


router
.route("/:id")
.get(productController.getOneProduct)
.patch(productController.UpadateProduct)
.delete(productController.deleteProduct)

module.exports=router;


