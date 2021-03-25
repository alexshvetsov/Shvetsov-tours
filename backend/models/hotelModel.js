import mongoose from 'mongoose';

const reviewSchema= mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }, 
    name:{type:String,required:true}, 
    rating:{type:Number,required:true}, 
    comment:{type:String,required:true}, 
},{timestamps:true})

const hotelSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    reviews:[reviewSchema],
    rating:{
        type:Number,
        required:true,
        default:0
    },
    numReviews:{
        type:Number,
        required:true,
        default:0
    }, 
    price: {
        type: Number,
        required: true,
        default: 0
    },
    coverImage: {
        type: String,
        required: true,
    }, 
    images: {
        type: [String],
        required: true,
    }
}, { timestamps: true });

const Hotel = mongoose.model('Hotel', hotelSchema)  

export default Hotel