import React, { useEffect } from 'react';
import { listHotels } from '../../actions/hotelActions.js';
import { listFavoriteHotels } from '../../actions/favoriteHotelActions.js';
import Rating from '../../components/rating/Rating'
import { NavLink } from 'react-router-dom';
import './hotelsScreen.scss'
import HotelCard from '../../components/hotelCard/HotelCard';
import { useDispatch, useSelector } from 'react-redux';


export const HotelsScreen = ({match}) => {

    const keyword = match.params.keyword
    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const hotelList = useSelector(state => state.hotelList);
    const { loading, error, hotels } = hotelList

    const favoriteHotelList = useSelector(state => state.favoriteHotelList);
    const { error:errorFavoriteHotelList, loading:loadingFavoriteHotelList, favoriteHotels } = favoriteHotelList;



    useEffect(() => {
        dispatch(listHotels(keyword, pageNumber))
        dispatch(listFavoriteHotels())
    }, [dispatch,keyword, pageNumber])




    return (
        <div className='hotels-screen' style={{ backgroundImage: `url('./hotel1.jpg')` }}>
            {(!loading && !loadingFavoriteHotelList  && hotels.hotels && hotels.hotels.length>0 ) && hotels.hotels.map((hotel, index) => <HotelCard hotel={hotel} 
            index={index} key={index} id={!errorFavoriteHotelList?favoriteHotels.find(FH => FH.hotel === hotel._id):undefined} />)

            } 
            
          
        </div>
    )
}
