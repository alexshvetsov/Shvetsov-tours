import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import Rating from '../../components/rating/Rating'
import { NavLink } from 'react-router-dom';
import './hotelCard.scss'
import { createFavoriteHotelAction, deleteFavoriteHotel } from '../../actions/favoriteHotelActions';
import Modal from '../modal/Modal';
import { useSelector } from 'react-redux';

const HotelCard = ({ hotel, index, id }) => {

    const dispatch = useDispatch()
    const [heartColor, setHeartColor] = useState()
    const [showModal, setShowModal] = useState(false)
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin

    const toggleFavoriteHotel = () => {
        if (!userInfo) {
            setShowModal(true)
            setTimeout(() => { setShowModal(false) }, 1500)
            return;
        }
        if (!id && !heartColor) {
            dispatch(createFavoriteHotelAction(hotel))
            setHeartColor(true)
        } else {
            dispatch(deleteFavoriteHotel(id._id))
            setHeartColor(false)
        }
    }

    useEffect(async () => {
        await id ? setHeartColor(true) : setHeartColor(false)
        console.log(heartColor);
    }, [id,])
    return (
        <div key={index} className='hotel-card'>
            {(showModal) && <Modal show={showModal}
                setShow={setShowModal} text='Only registered users can follow hotels' />}
            <div className='hotel-card__heading'>
                {hotel.coverImage && <img className='hotel-card__background-image' src={hotel.coverImage} alt='background' />}
                <h3 className='hotel-card__name'>{hotel.name}</h3>
                <i className={` hotel-card__invisable-like ${heartColor ? 'fas fa-heart' : 'far fa-heart'}`} onClick={toggleFavoriteHotel}></i>
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
