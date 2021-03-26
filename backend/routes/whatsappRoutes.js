import express from 'express';
const router = express.Router();
import {
    postWhatsappMessage
} from '../controllers/whatsappController.js'
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/')
    .post(protect, postWhatsappMessage)



export default router
