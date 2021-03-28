import {
    HOTEL_CREATE_REQUEST, HOTEL_CREATE_SUCCESS, HOTEL_CREATE_FAIL,
    HOTEL_LIST_REQUEST, HOTEL_LIST_SUCCESS, HOTEL_LIST_FAIL,
    HOTEL_DETAILS_REQUEST, HOTEL_DETAILS_SUCCESS, HOTEL_DETAILS_FAIL,
    HOTEL_CREATE_REVIEW_REQUEST, HOTEL_CREATE_REVIEW_SUCCESS, HOTEL_CREATE_REVIEW_FAIL

} from '../constants/hotelConstants.js'
import axios from 'axios';


export const listHotels = (keyword = '', pageNumber = '') => async (dispatch) => {
    try {
        dispatch({ type: HOTEL_LIST_REQUEST })
        const { data } = await axios.get(`/api/hotels?keyword=${keyword}&pageNumber=${pageNumber}`)
        // const { data } = await axios.get(`/api/hotels`)
        dispatch({ type: HOTEL_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: HOTEL_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
    }
}
export const listHotelDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: HOTEL_DETAILS_REQUEST })
        const { data } = await axios.get('/api/hotels/' + id)
        dispatch({ type: HOTEL_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: HOTEL_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
    }

}


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


export const createHotelReview = (hotelId, review) => async (dispatch, getState) => {
    try {
        dispatch({
            type: HOTEL_CREATE_REVIEW_REQUEST
        })
        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        }
     await axios.post(`/api/hotels/${hotelId}/reviews`, review, config)
        dispatch({
            type: HOTEL_CREATE_REVIEW_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type: HOTEL_CREATE_REVIEW_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}