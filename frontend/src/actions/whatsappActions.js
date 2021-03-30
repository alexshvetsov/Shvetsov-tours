import axios from 'axios';
import {
    POST_WHATSAPP_REQUEST, POST_WHATSAPP_SUCCESS, POST_WHATSAPP_FAIL
} from '../constants/whatsappConstants.js'


export const createHotelAction = (content) => async (dispatch, getState) => {
    try {
        
        dispatch({
            type: POST_WHATSAPP_REQUEST
        })

        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`  
            },
        }
        await axios.post(`/api/sendEmail`, content, config)

        dispatch({
            type: POST_WHATSAPP_SUCCESS
        })

    } catch (error) {
        dispatch({
            type: POST_WHATSAPP_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

