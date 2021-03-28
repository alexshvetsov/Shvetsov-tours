import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { createHotelAction } from '../../actions/hotelActions.js'
import './newHotelForm.scss'
import { HOTEL_CREATE_RESET } from '../../constants/hotelConstants';
import HotelCard from '../../components/hotelCard/HotelCard';
import Modal from '../../components/modal/Modal.js';


const NewHotelForm = () => {
    // add each hook to be obj with name and error
    const [name, setName] = useState({ value: 'Hotel ', error: false })
    const [country, setCountry] = useState({ value: '', error: false })
    const [city, setCity] = useState({ value: '', error: false })
    const [street, setStreet] = useState({ value: '', error: false })
    const [price, setPrice] = useState({ value: 0, error: false })
    const [description, setDescription] = useState({ value: '', error: false })
    const [coverImage, setCoverImage] = useState({ value: '', error: false })
    const [images, setImages] = useState({ value: '', error: false })
    const [coverImageURL, setCoverImageURL] = useState('')
    const [galleryImages, setGalleryImages] = useState([''])
    const [uploading, setUploading] = useState(false);
    const [show, setShow] = useState(true);
    // const [showPreview, setShowPreview] = useState(true);
    // const [showError, setShowError] = useState(true);
    const [error, setError] = useState(false);
    const [showModal, setShowModal] = useState(false)
    const hotelCreate = useSelector(state => state.hotelCreate);
    const {  hotel } = hotelCreate;

    const dispatch = useDispatch();


    const setGalleryImagesFunc = (e) => {
        let images = []
        Object.keys(e.target.files).map(f => images.push(URL.createObjectURL(e.target.files[f])))
        setGalleryImages(images)
    }

    useEffect(() => {
        if (hotel) {
            dispatch({ type: HOTEL_CREATE_RESET })
            setName({ value: 'Hotel ', error: false });
            setStreet({ value: '', error: false });
            setPrice({ value: 0, error: false });
            setCountry({ value: '', error: false });
            setCity({ value: '', error: false });
            setCoverImage({ value: '', error: false });
            setImages({ value: '', error: false });
            setDescription({ value: '', error: false });
        }
    }, [dispatch, hotel])


    const uploadCoverHandler = async (file) => {
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)
        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            const { data } = await axios.post('/api/upload', formData, config)
            setCoverImage({ value: data });
            setUploading(false)

        } catch (error) {
            console.error(error)
        }
    }

    const uploadGalleryHandler = async (files) => {
        //add setUploading and loader so form will send after this
        if (files.length > 3) return alert('asdadsassd')
        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            let tempImages = [];

            (async () => {
                Object.keys(files).map(async (f) => {
                    const formData = new FormData()
                    setUploading(true)
                    formData.append('image', files[f])
                    const { data } = await axios.post('/api/upload', formData, config)
                    tempImages.push(data)
                })
            })();

            setImages({ value: tempImages })
            setUploading(false)

        } catch (error) {
            console.error(error)
        }
    }

    const checkError = (value, index) => {
        if (value.length === 0 || value === 0) {
            setError(true)

            switch (index) {
                case 0:
                    setName({ value, error: true })
                    break;
                case 1:
                    setCountry({ value, error: true })
                    break;
                case 2:
                    setCity({ value, error: true })
                    break;
                case 3:
                    setStreet({ value, error: true })
                    break;
                case 4:
                    setPrice({ value, error: true })
                    break;
                case 5:
                    setDescription({ value, error: true })
                    break;
                case 6:
                    setImages({ value, error: true })
                    break;
                case 7:
                    setCoverImage({ value, error: true })
                    break;

                default: return

            }
        }
    }



    const submitHandler = async (e) => {
        e.preventDefault();

        [name, country, city, street, price, description, images, coverImage].map((input, index) => checkError(input.value, index))
        const errorIndex = [name, country, city, street, price, description, images, coverImage].findIndex((input) => (input.value.length === 0 || input.value === 0))

        if (errorIndex > 0) {
            return
        }
        dispatch(createHotelAction({
            name, country, city, street, description, price, coverImage, images
        }))
        setShowModal(true)
        setTimeout(()=>{setShowModal(false)},3000)
    };

    // aDd action that updates all the inputs to store when clicking preview and use effect that filles the inputs
    return (
        <>
{(showModal) && <Modal show={showModal} setShow={setShowModal} text='Hotel Submitted'/>}
 
            <form className='new-hotel'>
                <h1 className='new-hotel__heading'>Add New Hotel</h1>
                <div className={`new-hotel__input-area ${name.error ? 'error' : 'no-error'}`}>
                    <input className='new-hotel__input' type='passowrd' placeholder='Name'
                        value={name.value} onChange={(e) => setName({ value: e.target.value })} />

                </div>
                <div className='new-hotel__adress-area'>
                    <input className={`new-hotel__adress-input ${country.error ? 'error' : 'no-error'}`} type='text' placeholder='country'
                        value={country.value} onChange={(e) => setCountry({ value: e.target.value })} />
                    <input className={`new-hotel__adress-input ${city.error ? 'error' : 'no-error'}`} type='text' placeholder='city'
                        value={city.value} onChange={(e) => setCity({ value: e.target.value })} />
                    <input className={`new-hotel__adress-input ${street.error ? 'error' : 'no-error'}`} type='text' placeholder='street'
                        value={street.value} onChange={(e) => setStreet({ value: e.target.value })} />

                </div>
                <div className='new-hotel__input-area'>
                    <input className={`new-hotel__input ${price.error ? 'error' : 'no-error'}`} type='number' placeholder='price'
                        value={price.value} onChange={(e) => setPrice({ value: e.target.value })} />

                </div>
                <div className='new-hotel__input-area'>
                    <textarea className={`new-hotel__input textarea ${description.error ? 'error' : 'no-error'}`} placeholder='description'
                        value={description.value} onChange={(e) => setDescription({ value: e.target.value })} />

                </div>

                <div className='new-hotel__image-area '>

                    <label className={`new-hotel__image-label ${coverImage.error ? 'error' : 'no-error'}`} htmlFor='firstImage'>
                        <input className='new-hotel__image-input' type="file" accept="image/*" placeholder="image" id='firstImage'
                            onChange={((e) => { setCoverImageURL(URL.createObjectURL(e.target.files[0])); uploadCoverHandler(e.target.files[0]) })} />add cover image</label>

                    <label className={`new-hotel__image-label ${images.error ? 'error' : 'no-error'}`} htmlFor='secondImage'>
                        <input className='new-hotel__image-input' type="file" accept="image/*" placeholder="image" id='secondImage' multiple
                            onChange={((e) => { setGalleryImagesFunc(e); uploadGalleryHandler(e.target.files) })} />
                             add images (3 max)
                    </label>

                </div>
                <div className='new-hotel__buttons-area'>
                    <button className='new-hotel__btn' onClick={(e) => { e.preventDefault(); setShow(!show) }}>preview</button>
                    <button className='new-hotel__btn' onClick={submitHandler}>submit</button>
                </div>
            </form>
            <div className={`new-hotel__modal ${show ? 'hidden' : ''}`} onClick={()=>setShow(!show)}>
                <div className={`new-hotel__modal-content`} >
                    <HotelCard
                        hotel={{
                            _id: '21', name: name.value,
                            adress: { city: city.value, street: street.value, country: country.value },
                            rating: 8, coverImage:coverImageURL,
                        }} index='demo' />
                </div>
            </div>
        </>
    )
}

export default NewHotelForm
