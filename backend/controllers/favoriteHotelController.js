import FavoriteHotel from '../models/favoriteHotelModel.js';
import asyncHandler from 'express-async-handler';

// public route, fetching all the products get /
const getFavoriteHotelsByUser = asyncHandler(async (req, res) => {
    const favoriteHotels = await FavoriteHotel.find({user:req.user._id}).populate('hotel')
    console.log(favoriteHotels);
    res.json(favoriteHotels)
})



//private, create new hotel, post /
const postFavoriteHotel= asyncHandler(async (req, res) => {
    const  hotel  = req.body
    const favoriteHotel = new FavoriteHotel()
    favoriteHotel.user = req.user._id
    favoriteHotel.hotel = hotel._id
    const createdFavoriteHotel = await favoriteHotel.save()
    res.status(201).json(createdFavoriteHotel)
})

const deleteFavoriteHotel= asyncHandler(async (req, res) => {
    const favoriteHotel = await FavoriteHotel.findById(req.params.id)
   if (favoriteHotel) {
    await favoriteHotel.remove()
    res.json({ message: 'procuct removed' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

export {
    getFavoriteHotelsByUser,
    postFavoriteHotel,
    deleteFavoriteHotel
}