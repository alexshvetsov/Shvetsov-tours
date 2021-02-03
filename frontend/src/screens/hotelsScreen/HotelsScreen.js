import React from 'react'
import Rating from '../../components/rating/Rating'
import './hotelsScreen.scss'

export const HotelsScreen = () => {
    const hotels = [{
        name: 'four seasons',
        adress: {
            country: 'USA',
            city: 'los angels',
            street: 'second streed',
        },
        rating: 3.5,
        reviews: [{ user: 'adam', review: 'asdads', rating: 4 }],
        description: ['3 meals a day', 'large indoor pool', 'all day room service'],
        price: 50
    }, {
        name: 'four seasons',
        adress: {
            country: 'USA',
            city: 'los angels',
            street: 'second streed',
        },
        rating: 3.5,
        reviews: [{ user: 'adam', review: 'asdads', rating: 4 }],
        description: ['3 meals a day', 'large indoor pool', 'all day room service'],
        price: 50
    },{
        name: 'four seasons',
        adress: {
            country: 'USA',
            city: 'los angels',
            street: 'second streed',
        },
        rating: 3.5,
        reviews: [{ user: 'adam', review: 'asdads', rating: 4 }],
        description: ['3 meals a day', 'large indoor pool', 'all day room service'],
        price: 50
    }, {
        name: 'four seasons',
        adress: {
            country: 'USA',
            city: 'los angels',
            street: 'second streed',
        },
        rating: 3.5,
        reviews: [{ user: 'adam', review: 'asdads', rating: 4 }],
        description: ['3 meals a day', 'large indoor pool', 'all day room service'],
        price: 50
    },{
        name: 'four seasons',
        adress: {
            country: 'USA',
            city: 'los angels',
            street: 'second streed',
        },
        rating: 3.5,
        reviews: [{ user: 'adam', review: 'asdads', rating: 4 }],
        description: ['3 meals a day', 'large indoor pool', 'all day room service'],
        price: 50
    }, {
        name: 'four seasons',
        adress: {
            country: 'USA',
            city: 'los angels',
            street: 'second streed',
        },
        rating: 3.5,
        reviews: [{ user: 'adam', review: 'asdads', rating: 4 }],
        description: ['3 meals a day', 'large indoor pool', 'all day room service'],
        price: 50
    },{
        name: 'four seasons',
        adress: {
            country: 'USA',
            city: 'los angels',
            street: 'second streed',
        },
        rating: 3.5,
        reviews: [{ user: 'adam', review: 'asdads', rating: 4 }],
        description: ['3 meals a day', 'large indoor pool', 'all day room service'],
        price: 50
    }, {
        name: 'four seasons',
        adress: {
            country: 'USA',
            city: 'los angels',
            street: 'second streed',
        },
        rating: 3.5,
        reviews: [{ user: 'adam', review: 'asdads', rating: 4 }],
        description: ['3 meals a day', 'large indoor pool', 'all day room service'],
        price: 50
    },{
        name: 'four seasons',
        adress: {
            country: 'USA',
            city: 'los angels',
            street: 'second streed',
        },
        rating: 3.5,
        reviews: [{ user: 'adam', review: 'asdads', rating: 4 }],
        description: ['3 meals a day', 'large indoor pool', 'all day room service'],
        price: 50
    }, {
        name: 'four seasons',
        adress: {
            country: 'USA',
            city: 'los angels',
            street: 'second streed',
        },
        rating: 3.5,
        reviews: [{ user: 'adam', review: 'asdads', rating: 4 }],
        description: ['3 meals a day', 'large indoor pool', 'all day room service'],
        price: 50
    }, {
        name: 'four seasons',
        adress: {
            country: 'USA',
            city: 'los angels',
            street: 'second streed',
        },
        rating: 3.5,
        reviews: [{ user: 'adam', review: 'asdads', rating: 4 }],
        description: ['3 meals a day', 'large indoor pool', 'all day room service'],
        price: 50
    }]



    return (
        <div className='hotels-screen' style={{ backgroundImage: `url('/hotel1.jpg')` }}>
            {hotels.map((hotel, index) => <div key={index} className='hotel-card'>
            <div className='hotel-card__visable'>

                <h3 className='hotel-card__heading'>{hotel.name}</h3>
                <Rating value={hotel.rating} text={`3 reviews`} />
                <ul className='hotel-card__description'>
                    {hotel.description.map(string =>
                        <li className='hotel-card__description-item' key={index + string}>
                            {string}</li>)
                    }
                </ul>
                </div>
                <div className='hotel-card__invisable'>
                    <button className='hotel-card__invisable-btn'>
                        details
                    </button>
                </div>
            </div>)

            }
        </div>
    )
}
