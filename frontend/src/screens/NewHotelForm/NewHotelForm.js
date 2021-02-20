import React, { useState } from 'react'
import './newHotelForm.scss'

const NewHotelForm = () => {
    const [firstImage, setFirstImage] = useState('')
    const [secondImage, setSecondImage] = useState('')
    const [thirdImage, setThirdImage] = useState('')

    // add action that updates all the inputs to store when clicking preview and use effect that filles the inputs
    return (

        <form className='new-hotel'>
            <h1 className='new-hotel__heading'>Add New Hotel</h1>
            <div className='new-hotel__input-area'>
                <input className='new-hotel__input' type='passowrd' placeholder='Name' />

            </div>
            <div className='new-hotel__adress-area'>
                <input className='new-hotel__adress-input' type='text' placeholder='country' />
                <input className='new-hotel__adress-input' type='text' placeholder='city' />
                <input className='new-hotel__adress-input' type='text' placeholder='street' />

            </div>
            <div className='new-hotel__input-area'>
                <input className='new-hotel__input' type='number' placeholder='price' />

            </div>
            <div className='new-hotel__input-area'>
                <textarea className='new-hotel__input textarea' placeholder='description' />

            </div>

            <div className='new-hotel__image-area '>

                <label className='new-hotel__image-label' for='firstImage'>
                    <input className='new-hotel__image-input' type="file" accept="image/*" placeholder="image" id='firstImage' 
                        onChange={((e) => { setFirstImage(URL.createObjectURL(e.target.files[0])) })} />add image</label>
                {/* {firstImage && ${secondImage?'':'translate-x'} */}
                    <label className={`new-hotel__image-label  `} for='secondImage'>
                        <input className='new-hotel__image-input' type="file" accept="image/*" placeholder="image" id='secondImage' 
                            onChange={((e) => { setSecondImage(URL.createObjectURL(e.target.files[0])) })} />
                             add image
                    </label>
                 {/*     // }
               {secondImage &&  */}
                    <label className='new-hotel__image-label' for='thirdImage'>
                        <input className='new-hotel__image-input' type="file" accept="image/*" placeholder="image" id='thirdImage' 
                            onChange={((e) => { setThirdImage(URL.createObjectURL(e.target.files[0])) })} />
                             add image
                    </label>
                    {/* // } */}
            </div>
            {/*  pictures    */}
            <div className='new-hotel__buttons-area'>
            <button className='new-hotel__btn'>preview</button>
            <button className='new-hotel__btn'>submit</button>
            </div>
        </form>
    )
}

export default NewHotelForm
