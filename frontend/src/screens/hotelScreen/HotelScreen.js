import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listHotelDetails, createHotelReview } from '../../actions/hotelActions';
import Modal from '../../components/modal/Modal';
import { HOTEL_CREATE_REVIEW_RESET } from '../../constants/hotelConstants';
import Loader from '../../components/loader/Loader.js';

import './hotelScreen.scss'

export const HotelScreen = ({ match }) => {

    const dispatch = useDispatch()
    const hotelDetails = useSelector(state => state.hotelDetails);
    const { loading, hotel } = hotelDetails

    // const userLogin = useSelector(state => state.userLogin);
    // const { userInfo } = userLogin

    
    const hotelReviewCreate = useSelector(state => state.hotelReviewCreate);
    const { success: successHotelReview, error: errorHotelReview } = hotelReviewCreate


    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (successHotelReview) {
            alert('Review Submitted')
            setRating(0)
            setComment('')
            dispatch({ type: HOTEL_CREATE_REVIEW_RESET })
        }
        if(errorHotelReview) setShow(true)
        dispatch(listHotelDetails(match.params.id))
    }, [dispatch, match,errorHotelReview,successHotelReview])

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(hotel);
        if(!comment) return
        

        dispatch(createHotelReview(match.params.id, { rating, comment }))
    }

    return (
        <div className='hotel-screen'>
{(show) && <Modal show={show} setShow={setShow} text={errorHotelReview}/>}
            {loading ? <div className='hotel-screen__center'><Loader/></div> : <>  {hotel.images.length === 1 ?
                <div className='hotel-screen__gallery'>
                    <figure >
                        <img alt='image1' className='hotel-screen__gallery-photo1' src={hotel.images[0]} /></figure>
                </div> :
                hotel.images.length === 2 ?
                    <div className='hotel-screen__gallery'>
                        <figure ><img alt='image1' className='hotel-screen__gallery-photo' src={hotel.images[0]} /></figure>
                        <figure ><img alt='image2' className='hotel-screen__gallery-photo' src={hotel.images[1]} /></figure>
                    </div> :
                    <div className='hotel-screen__gallery'>
                        <figure ><img alt='image1' className='hotel-screen__gallery-photo' src={hotel.images[0]} /></figure>
                        <figure ><img alt='image2' className='hotel-screen__gallery-photo' src={hotel.images[1]} /></figure>
                        <figure ><img alt='image3' className='hotel-screen__gallery-photo' src={hotel.images[2]} /></figure>
                    </div>}

                <div className="hotel-screen__overview">
                    <h1 className="hotel-screen__overview-heading">
                        {hotel.name}
                    </h1>


                    <div className="hotel-screen__overview-location">
                        <i className='hotel-screen__me fas fa-map-marked-alt'></i>
                        <button className="hotel-screen-btn-inline">
                           {hotel.city},  {hotel.country}
                        </button>
                    </div>

                    <div className="hotel-screen__overview-rating">
                        <div className="hotel-screen__overview-rating-avarage">{hotel.rating}</div>
                        <div className="hotel-screen__overview-rating-count">{hotel.numReviews} votes</div>
                    </div>
                </div>

                <div className='hotel-screen__content'>
                    <div className='hotel-screen__content-right'>
                        <div className='hotel-screen__content-description'>{hotel.description}</div>
                        <form className='hotel-screen__content-form'>
                            <h3 className='hotel-screen__content-form-header'>Tell us about your experience</h3>


                            <div className='hotel-screen__content-form-textarea-container'>
                                <textarea className='hotel-screen__content-form-textarea' 
                                value={comment} onChange={(e) => setComment(e.target.value)}/>
                            </div>
                            <div className='hotel-screen__content-form-footer'>
                                <span>0</span><input type='range' min='0' max='10' 
                                value={rating} onChange={(e) => setRating(e.target.value)}/><span>10</span>
                                <button onClick={(e)=>submitHandler(e)}>submit</button>
                            </div>
                        </form>
                    </div>
                    <div className='hotel-screen__content-left'>
                        {hotel.reviews.map((review, index) => (
                            <div key={index} className='hotel-screen__content-left-review'>
                                <blockquote className='hotel-screen__content-left-review-text'>
                                    {review.comment}
                                </blockquote>
                                <div className='hotel-screen__content-left-review-details'>
                                    <div className='hotel-screen__content-left-review-user'>
                                        <h4>{review.name}</h4>
                                        {/* <div>{review.date.toLocaleDateString("en-US")}</div> */}
                                    </div>
                                    <span>{review.rating}</span>
                                </div>
                            </div>
                        ))}
                        <button className="hotel-screen__content-left-btn-inline">Show all <span>&rarr;</span></button>
                    </div>
                </div>
            </>}
        </div >
    )
}
