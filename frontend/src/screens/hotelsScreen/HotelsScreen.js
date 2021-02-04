import React from 'react'
import Rating from '../../components/rating/Rating'
import './hotelsScreen.scss'
import {NavLink} from 'react-router-dom';

export const HotelsScreen = () => {

const    hotels = [{
         _id:1,
        name: 'four seasons',
        images:['/images/1','/images/2','/images/3'],
        adress: {
            country: 'USA',
            city: 'los angels',
            street: 24,
        },
        rating: 3.5,
        reviews: [{ user: 'adam', review: 'asdads', rating: 4 }],
        description: ['3 meals a day', 'large indoor pool', 'all day room service'],
        price: 50
    }, {
        _id:2,
                name: 'four seasons',
        images:['/images/1'],
        adress: {
            country: 'USA',
            city: 'los angels',
            street: 24,
        },
        rating: 3.5,
        reviews: [{ user: 'adam', review: 'asdads', rating: 4 }],
        description: ['3 meals a day', 'large indoor pool', 'all day room service'],
        price: 50
    }, {
        _id:3,
                name: 'four seasons',
        images:['/images/1','/images/3'],
        adress: {
            country: 'USA',
            city: 'los angels',
            street: 24,
        },
        rating: 3.5,
        reviews: [{ user: 'adam', review: 'asdads', rating: 4 }],
        description: ['3 meals a day', 'large indoor pool', 'all day room service'],
        price: 50
    } ]



    return (
        <div className='hotels-screen' style={{ backgroundImage: `url('/hotel1.jpg')` }}>
            {hotels.map((hotel, index) => <div key={index} className='hotel-card'>
                <div className='hotel-card__visable'>

                    <h3 className='hotel-card__heading'>{hotel.name}</h3>
                    <span className='hotel-card__adress'>
                        <span> {hotel.adress.city}, {hotel.adress.street} , {hotel.adress.country} </span>
                    </span>
                    <Rating value={hotel.rating} text={`3 reviews`} />
                    <ul className='hotel-card__description'>
                        {hotel.description.map(string =>
                            <li className='hotel-card__description-item' key={index + string}>
                                <i class="fas fa-check"></i> {string}</li>)
                        }
                    </ul>
                </div>
                <div className='hotel-card__invisable'>
                    <i className='far fa-heart hotel-card__invisable-like'></i>
                    {/* <i className='fas  fa-heart hotel-card__invisable-like'></i> */}
                    <i className='fas fa-map-marked-alt hotel-card__invisable-map'></i>

                    <NavLink to={`/hotel/${hotel._id}`} className='hotel-card__invisable-btn'>
                        details
                    </NavLink>
                </div>
            </div>)

            }
        </div>
    )
}
