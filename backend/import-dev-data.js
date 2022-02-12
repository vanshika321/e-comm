// const mongoose=require("mongoose")
// const dotenv=require("dotenv")
// const fs=require("fs")
// const ProductModel =require("./model/ProductModel")

// dotenv.config({path:"./process.env"})


// const DB=process.env.DATABASE.replace(
//     "<password>",
//     process.env.DATABASE_PASSWORD
// )




// mongoose.connect(DB,
//     {
   
//         useNewUrlParser:true,
//         useCreateIndex:true,
//         useFindAndModify:false,
//         useUnifiedTopology: true
//     })
//     .then(console.log("DB connection successfull"))


// const Products=JSON.parse(fs.readFileSync("./data/products.json","utf-8"))
// console.log(Products)
// const createProduct= async ()=>{
//     try{
//         await ProductModel.create(Products)
//         console.log("Data created")
//         process.exit()
//     }
//     catch(err){
//         console.log("Unable to create the Data",err)
//     }
// }
// const deleteProduct=async ()=>{
//     try{
//         await ProductModel.deleteMany()
//         console.log("Data deleted")
//         process.exit()
        
//     }
//     catch(err){
//         console.log("Unable to delete the Data",err)
//     }
// }
// if(process.argv[2]=='--import'){
//     createProduct();
// }
// else if(process.argv[2]==='--delete'){
//     deleteProduct();
// }



const mongoose=require("mongoose")
const dotenv=require("dotenv")
const fs=require("fs")
const ProductModel =require("./model/ProductModel")

dotenv.config({path:"./process.env"})


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








const products=JSON.parse(fs.readFileSync("./data/products.json",'utf-8'))
console.log(products)
//Importing Data

const importData=async ()=>{
    try{
        await ProductModel.create(products)
        console.log('Data successfuly created')
        
        process.exit()
    }
    catch(err){
        console.log(err)
    }
}
const deleteData=async ()=>{
    try{
        await Tour.deleteMany()
        console.log('Data successfuly deleted')
        process.exit()
    }
    catch(err){
        console.log("errpr is 👎👍👍👌",err)
    }
}
console.log("hello i am process.argv",process.argv);
if(process.argv[2]=='--import'){
    importData();
}
else if(process.argv[2]==='--delete'){
    deleteData();
}