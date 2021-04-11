import React, { useState } from 'react'
import './searchbox.scss'

const SearchBox = ({ history }) => {
    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            history.push(`/search/${keyword}`)
        } else {  
            history.push('/')
        }
    }

    return (
        <div>
            <form action="#" className="search">
                <input type="text" className="search__input" placeholder="Search hotels" 
                 onChange={(e)=>{setKeyword(e.target.value); submitHandler(e) }}  />
                <button onClick={submitHandler} className="search__button">
                    <span className="search__icon">
                        <i className='fas fa-search'></i>
                    </span>
                </button >
            </form>
        </div>
    )
}

export default SearchBox
