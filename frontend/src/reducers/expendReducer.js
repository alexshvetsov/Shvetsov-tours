import {
  EXPEND_SIDE_NAV
} from '../constants/sidebarConstants.js'



export const toggleReducer = (state = {expend:false }, action) => {


    switch (action.type) {
        case EXPEND_SIDE_NAV:
            return { expend: action.payload }
        
        default:
            return state;
    }
}
 