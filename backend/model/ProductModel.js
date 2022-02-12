// const mongoose=require("mongoose")
// const slugify=require("slugify")


// const productSchema=new mongoose.Schema({
//     name:{
//         type:String,
//         required:[true.valueOf,"A product must have a name"],
//         unique:true,
//         maxLength:[40,"Name of the product cannot excced more than 100 charachters"],
//         minLenght:[40,"A name canot be more than 40"]

//     },
//     // slugify:{
//     //     type:String
//     // },
//     price:{
//         type:Number,
//         required:[true,"A product must have a price"]
//     },
//     ratingAverage:{

//         type:Number,
//         default:4.5,
//         min:[1,"The rating must begreater than 0"],
//         max:[5,"The rating must be less than 5"],
//     },

// })

// const Products=mongoose.model('Products',productSchema)

// module.exports=Products;





const mongoose=require('mongoose');
const slugify=require("slugify")

const productSchema=new mongoose.Schema({

    __EMPTY:{
        type:Number
    },

    name:{
        type:String,
        unique:true,
        // required:[true,"A Product  must have name"],
        maxLength:[40,"A Product name mus havr less than or equal to 40"],
        
        
    },
      
    slugify:{
        type:String,
    },
    

    ratings:{

        type:Number,
        default:4.5,
        min:[1,"The rating must begreater than 0"],
        max:[5,"The rating must be less than 5"],
    },
    ratingQuantity:{
        type:Number,
        default:0
    },
    price:{type:Number,
        // required:[true,"A Product must have price"]
    },
   
     priceDiscount:{
            type:Number,
            
        },
    summary:{
            type:String,
            trim:true
        },
    description:{
        type:String,
        trim:true
    },
    
    images:[String],
    createdAt:{
        type:Date,
        default:Date.now()
    },
    startDate:[Date],
    

    
    
    // guides: [
    //     {
    //       type: mongoose.Schema.ObjectId,
    //       ref: 'User'
    //     }
    //   ]
    

}, 

)




//DOCUMENT MIDD;EWARE runs befpre save command and creatte()


// tourSchema.pre("save",async function(next){
//     const guidesPromises=this.guides.map(async id=>{
//     await  User.findById(id)
//     this.guides= await Promise.all(guidesPromises);
//     next();
    
//     })
// }
//)

module.exports = mongoose.model('Products', productSchema);

