import React, { useEffect } from 'react'
import './hotelScreen.scss'

export const HotelScreen = ({ match }) => {
    const hotels = [{
        _id: 1,
        name: 'four seasons',
        images: ['/images/hotel-1.jpg', '/images/hotel-2.jpg', '/images/hotel-3.jpg'],
        adress: {
            country: 'USA',
            city: 'los angels',
            street: 24,
        },
        rating: 3.5,
        reviews: [{ date: new Date(), user: 'tony albertini', review: 'i will comeback again somtinme. amazing place i cant belive i was there', rating: 4 },
        { date: new Date(), user: 'adam smith', review: 'shitty place no parking and the rooms looks like bratinslava in 1973', rating: 4 }],
        description: 'At the Four Seasons Hotel we offer great servieces and all kind of exlusive offerings. Three meals a day service is available and all the room service you would like',
        price: 50
    }, {
        _id: 2,
        name: 'four seasons',
        images: ['/images/hotel-1.jpg'],
        adress: {
            country: 'USA',
            city: 'los angels',
            street: 24,
        },
        rating: 3.5,
        reviews: [{ date: new Date(), user: 'tony albertini', review: 'i will comeback again somtinme. amazing place i cant belive i was there', rating: 4 },
        { date: new Date(), user: 'adam smith', review: 'shitty place no parking and the rooms looks like bratinslava in 1973', rating: 4 }],
        description: 'At the Four Seasons Hotel we offer great servieces and all kind of exlusive offerings. Three meals a day service is available and all the room service you would like',
        price: 50
    }, {
        _id: 3,
        name: 'four seasons',
        reviews: [{ date: new Date(), user: 'tony albertini', review: 'i will comeback again somtinme. amazing place i cant belive i was there', rating: 4 },
        { date: new Date(), user: 'adam smith', review: 'shitty place no parking and the rooms looks like bratinslava in 1973', rating: 4 }],
        images: ['/images/hotel-1.jpg', '/images/hotel-3.jpg'],
        adress: {
            country: 'USA',
            city: 'los angels',
            street: 24,
        }
    }]

    let id = Number(match.params.id) - 1


    useEffect(() => {
        console.log(id);
        id = match.params.id
    }, [])

    return (
        <div className='hotel-screen'>
            {hotels[id].images.length === 1 ?
                <div className='hotel-screen__gallery'>
                    <figure >
                        <img className='hotel-screen__gallery-photo' src={hotels[id].images[0]} /></figure>
                </div> :
                hotels[id].images.length === 2 ?
                    <div className='hotel-screen__gallery'>
                        <figure ><img className='hotel-screen__gallery-photo' src={hotels[id].images[0]} /></figure>
                        <figure ><img className='hotel-screen__gallery-photo' src={hotels[id].images[1]} /></figure>
                    </div> :
                    <div className='hotel-screen__gallery'>
                        <figure ><img className='hotel-screen__gallery-photo' src={hotels[id].images[0]} /></figure>
                        <figure ><img className='hotel-screen__gallery-photo' src={hotels[id].images[1]} /></figure>
                        <figure ><img className='hotel-screen__gallery-photo' src={hotels[id].images[2]} /></figure>
                    </div>}

            <div className="hotel-screen__overview">
                <h1 className="hotel-screen__overview-heading">
                    Hotel Las Palmas
                    </h1>


                <div className="hotel-screen__overview-location">
                    <i classNameNahotel-screen__me='fas fa-map-marked-alt'></i>
                    <button className="hotel-screen-btn-inline">
                        Albufeira, Portugal
                        </button>
                </div>

                <div className="hotel-screen__overview-rating">
                    <div className="hotel-screen__overview-rating-avarage">8.6</div>
                    <div className="hotel-screen__overview-rating-count">429 votes</div>
                </div>
            </div>

            <div className='hotel-screen__content'>
                <div className='hotel-screen__content-right'>
                    <div className='hotel-screen__content-description'>{hotels[id].description}</div>
                    <form className='hotel-screen__content-form'>
                        <h3 className='hotel-screen__content-form-header'>Tell us about your experience</h3>


                        <div className='hotel-screen__content-form-textarea-container'>
                            <textarea className='hotel-screen__content-form-textarea' />
                        </div>
                        <div className='hotel-screen__content-form-footer'>
                            <input type='range' min='0' max='5' />
                            <button>submit</button>
                        </div>
                    </form>
                </div>
                <div className='hotel-screen__content-left'>
                    {hotels[id].reviews.map((review, index) => (
                        <div key={index} className='hotel-screen__content-left-review'>
                            <blockquote className='hotel-screen__content-left-review-text'>
                                {review.review}
                            </blockquote>
                            <div className='hotel-screen__content-left-review-details'>
                                <div className='hotel-screen__content-left-review-user'>
                                    <h4>{review.user}</h4>
                                    <div>{review.date.toLocaleDateString("en-US")}</div>
                            </div>
                            <span>{review.rating}</span>
                            </div> 
                        </div>  
                    ))}
                      <button class="hotel-screen__content-left-btn-inline">Show all <span>&rarr;</span></button>
                </div>
            </div>
        </div>
    )
}
