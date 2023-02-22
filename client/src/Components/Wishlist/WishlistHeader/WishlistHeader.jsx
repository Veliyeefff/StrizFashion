import React from 'react'
import { useNavigate } from 'react-router-dom'
import './WishlistHeader.css'
function WishlistHeader() {
    const navigate = useNavigate()
    return (
        <div id="detailsheader">
            <h4 className='details-header-h4'>
                WISHLIST
            </h4>
            <p className='details-header-p'><span onClick={() => { navigate('/') }} className='nav-home'>Home</span> <span>{'>'}</span> <span>Wishlist</span></p>
        </div>
    )
}

export default WishlistHeader