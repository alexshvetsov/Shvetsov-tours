import mongoose from 'mongoose';



const favoriteHotelSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    hotel: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Hotel'
    },
   
}, { timestamps: true });

const FavoriteHotel = mongoose.model('FavoriteHotel', favoriteHotelSchema)  

export default FavoriteHotel