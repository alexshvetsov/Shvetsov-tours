import express from 'express';
const router = express.Router();
import {
    getFavoriteHotelsByUser,
    postFavoriteHotel,
    deleteFavoriteHotel
} from '../controllers/favoriteHotelController.js'
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/')
    .get(protect, getFavoriteHotelsByUser)
    .post(protect, postFavoriteHotel)

router.route('/:id')
    .delete(protect, deleteFavoriteHotel)


export default router
