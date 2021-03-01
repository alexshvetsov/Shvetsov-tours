import express from 'express';
const router = express.Router();
import { getHotels, postHotel } from '../controllers/hotelController.js'
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/')
    .get(getHotels)
    .post(protect, postHotel)

export default router
