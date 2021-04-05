import {
    GET_FAVORITE_HOTELS_REQUEST, GET_FAVORITE_HOTELS_SUCCESS, GET_FAVORITE_HOTELS_FAIL,ADD_FAVORITE_HOTEL,DELETE_FAVORITE_HOTEL,
    POST_FAVORITE_HOTEL_REQUEST, POST_FAVORITE_HOTEL_SUCCESS, POST_FAVORITE_HOTEL_FAIL,
    DELETE_FAVORITE_HOTEL_REQUEST, DELETE_FAVORITE_HOTEL_SUCCESS, DELETE_FAVORITE_HOTEL_FAIL
} from '../constants/favoriteHotelConstants.js'
import axios from 'axios';


export const listFavoriteHotels = () => async (dispatch,getState) => {
    try {
        dispatch({ type: GET_FAVORITE_HOTELS_REQUEST })
        // const { data } = await axios.get(`/api/products?keyword=${keyword}&pageNumber=${pageNumber}`)
        const { userLogin: { userInfo } } = getState()
        
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        }
        const { data } = await axios.get(`/api/favoriteHotels`,config)
        dispatch({ type: GET_FAVORITE_HOTELS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_FAVORITE_HOTELS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
    }

}

export const createFavoriteHotelAction = (hotel) => async (dispatch, getState) => {
    try {
        dispatch({
            type: POST_FAVORITE_HOTEL_REQUEST
        })
        const { userLogin: { userInfo } } = getState()
        const { favoriteHotelList: { favoriteHotels } } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        }
        const { data } = await axios.post(`/api/favoriteHotels`, hotel, config)
        const newFavoriteHotels= [...favoriteHotels,data]
        console.log(data);
        console.log(newFavoriteHotels);
        dispatch({
            type: POST_FAVORITE_HOTEL_SUCCESS,
            payload: data
        })
        dispatch({
            type: ADD_FAVORITE_HOTEL,
            payload: newFavoriteHotels
        })
    } catch (error) {
        dispatch({
            type: POST_FAVORITE_HOTEL_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const deleteFavoriteHotel = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: DELETE_FAVORITE_HOTEL_REQUEST
        })
        const { favoriteHotelList: { favoriteHotels } } = getState()

        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            },
        }
        await axios.delete(`/api/favoriteHotels/${id}`, config)
 
        dispatch({
            type: DELETE_FAVORITE_HOTEL_SUCCESS
        })
        dispatch({
            type: DELETE_FAVORITE_HOTEL,
            payload:favoriteHotels.filter(FH=>FH._id!==id)
        })
        
    } catch (error) {
        dispatch({
            type: DELETE_FAVORITE_HOTEL_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

