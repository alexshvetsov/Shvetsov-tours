import {HOTEL_CREATE_REQUEST,HOTEL_CREATE_SUCCESS,HOTEL_CREATE_FAIL,HOTEL_CREATE_RESET} from '../constants/hotelConstants.js'
import axios from 'axios';


export const createHotelAction = (hotel) => async (dispatch, getState) => {
    try {
        dispatch({
            type: HOTEL_CREATE_REQUEST
        })
        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        }
        const { data } = await axios.post(`/api/hotels`, hotel, config)

        dispatch({
            type: HOTEL_CREATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: HOTEL_CREATE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}