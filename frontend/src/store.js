import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  userLoginReducer, userRegisterReducer,
} from './reducers/userReducers.js'

import {hotelCreateReducer,hotelListReducer,hotelDetailsReducer, hotelReviewCreateReducer} from './reducers/hotelReducers.js'
import { deleteFavoriteHotelReducer,addFavoriteHotelReducer,favoriteHotelListReducer } from './reducers/favoriteHotelReducers.js';

const reducer = combineReducers({
  
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  hotelCreate:hotelCreateReducer,
  hotelList:hotelListReducer,
  hotelDetails:hotelDetailsReducer,
  hotelReviewCreate:hotelReviewCreateReducer,
  favoriteHotelList:favoriteHotelListReducer,
  addFavoriteHotel:addFavoriteHotelReducer,
  deleteFavoriteHotel:deleteFavoriteHotelReducer


})



const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null


const initialState = {
  userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store;    