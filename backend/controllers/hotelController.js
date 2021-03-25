import Hotel from '../models/hotelModel.js';
import asyncHandler from 'express-async-handler';

// public route, fetching all the products get /
const getHotels = asyncHandler(async (req, res) => {
  const pageSize = 9;
  const page = Number(req.query.pageNumber) || 1
  const keyword = req.query.keyword ? {
    name: {
      $regex: req.query.keyword,
      $options: 'i'
    }
  } : {}

  const count = await Hotel.countDocuments({ ...keyword })
  const hotels = await Hotel.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  console.log(keyword);
  console.log(hotels);
  res.json({ hotels, page, pages: Math.ceil(count / pageSize) })
})

//public route, fetching hotel by id get /:id
const getHotelById = asyncHandler(async (req, res) => {
  console.log('as');
  const hotel = await Hotel.findById(req.params.id)
  if (hotel) {
    res.json(hotel)
  } else {
    res.status(404)
    throw new Error('Hotel not found')
  }
})



//private, create new hotel, post /
const postHotel = asyncHandler(async (req, res) => {
  const { name, country, city, street, price, description, coverImage, images } = req.body
  const hotel = new Hotel()
  hotel.user = req.user._id
  hotel.name = name.value
  hotel.country = country.value
  hotel.city = city.value
  hotel.street = street.value
  hotel.price = Number(price.value)
  hotel.description = description.value
  hotel.coverImage = coverImage.value
  hotel.images = images.value
  const createdHotel = await hotel.save()
  res.status(201).json(createdHotel)
})


//private, create new review post /api/hotels/:id/reviews
const createHotelReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body

  const hotel = await Hotel.findById(req.params.id)
  if (hotel) {
    const alreadyReviewd = hotel.reviews.find(r => r.user.toString() === req.user._id.toString())

    if (alreadyReviewd) {
      res.status(400)
      throw new Error('hotel already reviewed')
    }
    const review = {
      name: req.user.name,
      rating: rating,
      comment,
      user: req.user._id
    }

    hotel.reviews.push(review)
    hotel.numReviews = hotel.reviews.length
    hotel.rating = hotel.reviews.reduce((acc, item) => item.rating + acc, 0) / hotel.reviews.length

    await hotel.save()
    res.status(201).json({ message: 'review added' })
  } else {
    res.status(404)
    throw new Error('Hotel not found')
  }


})

export {
  getHotels,
  postHotel,
  getHotelById,
  createHotelReview
}