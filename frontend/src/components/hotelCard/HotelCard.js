import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Rating from '../../components/rating/Rating'
import { NavLink } from 'react-router-dom';
import './hotelCard.scss'
import img from './hotel1.jpg'
import { createFavoriteHotelAction,deleteFavoriteHotel } from '../../actions/favoriteHotelActions';

const HotelCard = ({ hotel, index, id }) => {
    const dispatch = useDispatch()

    const toggleFavoriteHotel = () => {
        if (!id) {
            dispatch(createFavoriteHotelAction(hotel))
        } else {
            dispatch(deleteFavoriteHotel(id._id))
        }

    }
    return (

        <div key={index} className='hotel-card'>
            <div className='hotel-card__heading'>
                {hotel.coverImage && <img className='hotel-card__background-image' src={hotel.coverImage} alt='background-image' />}
                <h3 className='hotel-card__name'>{hotel.name}</h3>
                <i className={` hotel-card__invisable-like ${id ? 'fas fa-heart' : 'far fa-heart'}`} onClick={toggleFavoriteHotel}></i>
                <i className='fas fa-map-marked-alt hotel-card__invisable-map'></i>
            </div>
            <div className='hotel-card__adress'>
                {hotel.city} {hotel.street}, {hotel.country}
            </div>
            <Rating value={hotel.rating/2} text={`${hotel.numReviews | index !== 'demo'? 0:5} reviews`} />
            <div className='hotel-card__footer'>
                <NavLink to={index !== 'demo'?`/hotel/${hotel._id}`:'#'} className='hotel-card__btn'>
                    details
                </NavLink>
            </div>
        </div>
    )
}

export default HotelCard
