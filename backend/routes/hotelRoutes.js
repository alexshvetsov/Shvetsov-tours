import express from 'express';
const router = express.Router();
import { getHotels, postHotel,getHotelById,createHotelReview } from '../controllers/hotelController.js'
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/')
.get(getHotels)
.post(protect, postHotel)

router.route('/:id')
    .get(getHotelById)
    
    router.route('/:id/reviews').post(protect,createHotelReview )
export default router
