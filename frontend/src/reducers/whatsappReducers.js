import {
    POST_WHATSAPP_REQUEST, POST_WHATSAPP_SUCCESS,POST_WHATSAPP_FAIL
} from '../constants/whatsappConstants.js'

export const messageReducer = (state = {}, action) => {

    switch (action.type) {
        case POST_WHATSAPP_REQUEST:
            return { loading: true }
        case POST_WHATSAPP_SUCCESS:
            return { loading: false, success: true }
        case POST_WHATSAPP_FAIL:
            return { loading: false, error: action.payload, success: false }

        default:
            return state;
    }
}


