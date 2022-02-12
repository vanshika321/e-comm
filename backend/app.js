const express=require('express');
const fs=require("fs")
const app=express()
const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config({path:"./process.env"})
const morgan =require("morgan") 
const bodyParser = require('body-parser');
const productsRoute=require("./Routes/productRoutes")
const userRoute=require("./Routes/userRoute")


const DB=process.env.DATABASE.replace(
    "<password>",
    process.env.DATABASE_PASSWORD
)

mongoose.connect(DB,
    {
   
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology: true
    })
    .then(console.log("DB connection successfull"))

app.use(morgan('dev'))

var port=3000
app.listen(port,()=>{
    console.log(`App is running on the port ${port}`);
})
// app.post("/products",(req,res)=>{
//     res.status(201).json({
//         products
//     })
// })
app.use((req, res, next) => {
    res.header({"Access-Control-Allow-Origin": "*"});
    next();
  }) 

app.use("/api/v1/products",productsRoute)
app.use("/api/v1/users",userRoute)

 