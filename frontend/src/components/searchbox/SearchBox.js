import React from 'react'
import './searchbox.scss'

const SearchBox = () => {
    return (
        <div>
                <form action="#" className="search">
                    <input type="text" className="search__input" placeholder="Search hotels"/>
                    <button className="search__button">
                        <span className="search__icon">
                            <i className='fas fa-search'></i>
                        </span>
                    </button>
                </form>
        </div>
    )
}

export default SearchBox
