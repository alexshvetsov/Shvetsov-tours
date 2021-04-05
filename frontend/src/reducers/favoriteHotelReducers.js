import {
    GET_FAVORITE_HOTELS_REQUEST, GET_FAVORITE_HOTELS_SUCCESS, GET_FAVORITE_HOTELS_FAIL, ADD_FAVORITE_HOTEL, DELETE_FAVORITE_HOTEL,
    POST_FAVORITE_HOTEL_REQUEST, POST_FAVORITE_HOTEL_SUCCESS, POST_FAVORITE_HOTEL_FAIL,
    DELETE_FAVORITE_HOTEL_REQUEST, DELETE_FAVORITE_HOTEL_SUCCESS, DELETE_FAVORITE_HOTEL_FAIL
} from '../constants/favoriteHotelConstants.js'



export const favoriteHotelListReducer = (state = { }, action) => {


    switch (action.type) {
        case GET_FAVORITE_HOTELS_REQUEST:
            return { loading: true,  }
        case GET_FAVORITE_HOTELS_SUCCESS:
            return {
                loading: false,
                favoriteHotels: action.payload,
            }
        case GET_FAVORITE_HOTELS_FAIL:
            return { loading: false, error: action.payload }
        case ADD_FAVORITE_HOTEL:
            return {
                loading: false,
                favoriteHotels: action.payload,
            }
        case DELETE_FAVORITE_HOTEL:
            return {
                loading: false,
                favoriteHotels: action.payload
            }

        case ADD_FAVORITE_HOTEL:
            return {
                loading: false,
                favoriteHotels: action.payload
            }
        default:
            return state;
    }
}


export const addFavoriteHotelReducer = (state = {}, action) => {


    switch (action.type) {
        case POST_FAVORITE_HOTEL_REQUEST:
            return { loading: true }
        case POST_FAVORITE_HOTEL_SUCCESS:
            return { loading: false, success: true }
        case POST_FAVORITE_HOTEL_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state;
    }
}

export const deleteFavoriteHotelReducer = (state = {}, action) => {


    switch (action.type) {
        case DELETE_FAVORITE_HOTEL_REQUEST:
            return { loading: true, ...state }
        case DELETE_FAVORITE_HOTEL_SUCCESS:
            return { loading: false, success: true }
        case DELETE_FAVORITE_HOTEL_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
