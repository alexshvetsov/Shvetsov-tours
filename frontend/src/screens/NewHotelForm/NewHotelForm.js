import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { createHotelAction } from '../../actions/hotelActions.js'
import './newHotelForm.scss'
import { HOTEL_CREATE_RESET } from '../../constants/hotelConstants';

const NewHotelForm = () => {

    const [name, setName] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [coverImage, setCoverImage] = useState('')
    const [images, setImages] = useState('')
    const [coverImageURL, setCoverImageURL] = useState('')
    const [galleryImages, setGalleryImages] = useState([''])
    const [uploading, setUploading] = useState(false);

    const hotelCreate = useSelector(state => state.hotelCreate);
    const { error, loading, hotel } = hotelCreate;

    const dispatch = useDispatch();


    const setGalleryImagesFunc = (e) => {
        let images = []
        Object.keys(e.target.files).map(f => images.push(URL.createObjectURL(e.target.files[f])))
        setGalleryImages(images)
    }

    useEffect(() => {
        if (hotel) {
            dispatch({ type: HOTEL_CREATE_RESET })
            setName('');
            setStreet('');
            setPrice(0);
            setCountry('');
            setCity('');
            setCoverImage('');
            setImages([]);
            setDescription('');
        }
    }, [dispatch, hotel])


    const uploadCoverHandler = async (file) => {
        //add setUploading and loader so form will send after this

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            const formData = new FormData()
            formData.append('image', file)
            setUploading(true)
            console.log(file);
            const { data } = await axios.post('/api/upload', formData, config)
            console.log(data);
            setCoverImage(data);
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

            setImages(tempImages)
            console.log(images);
            setUploading(false)

        } catch (error) {
            console.error(error)
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log({ name, country, city, street, price, description, images, coverImage })
        dispatch(createHotelAction({
            name, country, city, street, description, price, coverImage, images
        }))
    };

    // aDd action that updates all the inputs to store when clicking preview and use effect that filles the inputs
    return (

        <form className='new-hotel'>
            <h1 className='new-hotel__heading'>Add New Hotel</h1>
            <div className='new-hotel__input-area'>
                <input className='new-hotel__input' type='passowrd' placeholder='Name'
                    value={name} onChange={(e) => setName(e.target.value)} />

            </div>
            <div className='new-hotel__adress-area'>
                <input className='new-hotel__adress-input' type='text' placeholder='country'
                    value={country} onChange={(e) => setCountry(e.target.value)} />
                <input className='new-hotel__adress-input' type='text' placeholder='city'
                    value={city} onChange={(e) => setCity(e.target.value)} />
                <input className='new-hotel__adress-input' type='text' placeholder='street'
                    value={street} onChange={(e) => setStreet(e.target.value)} />

            </div>
            <div className='new-hotel__input-area'>
                <input className='new-hotel__input' type='number' placeholder='price'
                    value={price} onChange={(e) => setPrice(e.target.value)} />

            </div>
            <div className='new-hotel__input-area'>
                <textarea className='new-hotel__input textarea' placeholder='description'
                    value={description} onChange={(e) => setDescription(e.target.value)} />

            </div>

            <div className='new-hotel__image-area '>

                <label className='new-hotel__image-label' htmlFor='firstImage'>
                    <input className='new-hotel__image-input' type="file" accept="image/*" placeholder="image" id='firstImage'
                        onChange={((e) => { setCoverImageURL(URL.createObjectURL(e.target.files[0])); uploadCoverHandler(e.target.files[0]) })} />add cover image</label>

                <label className={`new-hotel__image-label  `} htmlFor='secondImage'>
                    <input className='new-hotel__image-input' type="file" accept="image/*" placeholder="image" id='secondImage' multiple
                        onChange={((e) => { setGalleryImagesFunc(e); uploadGalleryHandler(e.target.files) })} />
                             add images (3 max)
                    </label>

            </div>
            <div className='new-hotel__buttons-area'>
                <button className='new-hotel__btn'>preview</button>
                <button className='new-hotel__btn' onClick={submitHandler}>submit</button>
            </div>
        </form>
    )
}

export default NewHotelForm
