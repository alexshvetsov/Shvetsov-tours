import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import Rating from '../../components/rating/Rating'
import { NavLink } from 'react-router-dom';
import './hotelCard.scss'
import { createFavoriteHotelAction, deleteFavoriteHotel } from '../../actions/favoriteHotelActions';

const HotelCard = ({ hotel, index, id }) => {

    const dispatch = useDispatch()
    const [heartColor, setHeartColor] = useState(false)

    const toggleFavoriteHotel = () => {
        if (!id) {
            dispatch(createFavoriteHotelAction(hotel))
            setHeartColor(true)
        } else {
            dispatch(deleteFavoriteHotel(id._id))
            setHeartColor(false)
        }

    }

    useEffect(() => {
        id ? setHeartColor(true) : setHeartColor(false)
        console.log(heartColor);
    }, [id,heartColor])
    return (

        <div key={index} className='hotel-card'>
            <div className='hotel-card__heading'>
                {hotel.coverImage && <img className='hotel-card__background-image' src={hotel.coverImage} alt='background' />}
                <h3 className='hotel-card__name'>{hotel.name}</h3>
                <i className={` hotel-card__invisable-like ${id ? 'fas fa-heart' : 'far fa-heart'}`} onClick={toggleFavoriteHotel}></i>
                {/* <i className='fas fa-map-marked-alt hotel-card__invisable-map'></i> */}
            </div>
            <div className='hotel-card__adress'>
                {hotel.city} {hotel.street}, {hotel.country}
            </div>
            <Rating value={hotel.rating / 2} text={`${index === 'demo' ? 6 : hotel.numReviews ? hotel.numReviews : 0} reviews`} />
            <div className='hotel-card__footer'>
                <NavLink to={index !== 'demo' ? `/hotel/${hotel._id}` : '#'} className='hotel-card__btn'>
                    details
                </NavLink>
            </div>
        </div>
    )
}

export default HotelCard
