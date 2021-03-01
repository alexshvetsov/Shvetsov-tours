import {HOTEL_CREATE_REQUEST,HOTEL_CREATE_SUCCESS,HOTEL_CREATE_FAIL,HOTEL_CREATE_RESET} from '../constants/hotelConstants.js'

export const hotelCreateReducer = (state = {}, action) => {


    switch (action.type) {
        case HOTEL_CREATE_REQUEST:
            return { loading: true }
        case HOTEL_CREATE_SUCCESS:
            return { loading: false, success: true, hotel: action.payload }
        case HOTEL_CREATE_FAIL:
            return { loading: false, error: action.payload }
        case HOTEL_CREATE_RESET:
            return {}
        default:
            return state;
    }
}