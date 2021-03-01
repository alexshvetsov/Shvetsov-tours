import Hotel from '../models/hotelModel.js';
import asyncHandler from 'express-async-handler';

// public route, fetching all the products get /
const getHotels = asyncHandler(async (req, res) => {
  
    const hotels = await Hotel.find()
    res.json(hotels)
  })
  


//private, create new hotel, post /
const postHotel= asyncHandler(async(req,res)=>{
    const {name,country,city,street,price,description,coverImage,images}=req.body
  
    const hotel = new Hotel()
    hotel.user= req.user._id,
    hotel.name=name
    hotel.country=country
    hotel.city=city
    hotel.price=Number(price)
    hotel.description=description
    hotel.coverImage=coverImage
    hotel.images=images
    hotel.street=street
    // console.log(hotel);
    const createdHotel = await hotel.save()
    console.log(createdHotel);
    res.status(201).json(createdHotel)
})

export{
    getHotels,
    postHotel
}