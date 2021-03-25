import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listFavoriteHotels } from '../../actions/favoriteHotelActions.js';
import { listHotels } from '../../actions/hotelActions.js';

import HotelCard from '../../components/hotelCard/HotelCard.js';
import './followedHotels.scss';

const FollowedHotels = () => {
    const dispatch = useDispatch()
    const hotelList = useSelector(state => state.hotelList);
    const { loading:loadingHotelList, error:errorHotelList, hotels } = hotelList

    const favoriteHotelList = useSelector(state => state.favoriteHotelList);
    const { error, loading, favoriteHotels } = favoriteHotelList;


    useEffect(() => {
        dispatch(listHotels())
        dispatch(listFavoriteHotels())
    }, [dispatch,])

    return (
        <div className='hotels-screen' style={{ backgroundImage: `url('./hotel1.jpg')` }}>
            {(!loading && !loadingHotelList &&  hotels.hotels && hotels.hotels.length>0 && favoriteHotels.length>0) && favoriteHotels.map((favoriteHotel, index) =>
             <HotelCard hotel={favoriteHotel.hotel}
                index={index} key={index} id={!error ? favoriteHotels.find(FH => FH.hotel === favoriteHotel.hotel) : undefined} />)

            }
        </div>
    )
}

export default FollowedHotels
