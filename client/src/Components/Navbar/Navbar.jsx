import React from 'react'
import './Navbar.css'
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import { Link,NavLink, useNavigate } from 'react-router-dom'
import {CiSearch} from 'react-icons/ci'
import {BsPerson} from 'react-icons/bs'
import {CiHeart} from 'react-icons/ci'
import {BsCart3} from 'react-icons/bs'
import {HiOutlineBars3} from 'react-icons/hi2'
import {IoIosArrowUp} from 'react-icons/io'
import {HiOutlineX} from 'react-icons/hi'
import {CiLogin} from 'react-icons/ci'
import {AiOutlineLogin} from 'react-icons/ai'
import {BiLogOutCircle} from 'react-icons/bi'
import { useState } from 'react'
import { useProvider } from '../../Context/ProductContext'
function Navbar() {
    const {favs,setFavs} = useProvider()
    const [navvisible,setNavvisible] = useState(null)
    const [icon,setIcon] = useState(false)
    const navigate = useNavigate()
    let user = JSON.parse(localStorage.getItem("user"))
    const handleWindow = ()=>{
        window.scrollTo({top:0,behavior:"smooth"})
    }
    const handleNav = () =>{
        setIcon(true)
        setNavvisible("nav-active")
    }
    const handleNavX = () =>{
        setIcon(false)
        setNavvisible(null)
    }
    const logout = () => {
        localStorage.removeItem("user")
        navigate("/")
        window.location.reload()
    }
    return (
        <>
        <div id='navbar'>
            <div className="navbar-brand">
                <img className='navbar-brand-image' src='https://demo2.wpopal.com/striz/wp-content/uploads/2019/01/logo-new.svg' alt="logo" />
            </div>
            <div className="navbar-links">
                <ul className='navbar-links-list'>
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink to='/products'>PRODUCT</NavLink></li>
                    <li><NavLink to='/onsale'>ON SALE</NavLink></li>
                    <li><NavLink to='/blog'>BLOG</NavLink></li>
                    <li><NavLink to='/contact'>CONTACT</NavLink></li>
                    <li><NavLink to='/about'>ABOUT</NavLink></li>
                </ul>
            </div>
            <div className="navbar-icons">
                <span><CiSearch/></span>
                <span>
                    <BsPerson onClick={()=>{user?navigate("/profile"):navigate("/login")}}/>
                </span>
                <span onClick={()=>{navigate('/wishlist')}}><CiHeart/><sup>{user? user.userWishList.length:0}</sup></span>
                <span onClick={()=>{navigate('/cart')}}><BsCart3/><sup>0</sup></span>
                {
                    user?<span onClick={logout}><BiLogOutCircle/></span>:<span onClick={()=>{navigate('/login')}}><AiOutlineLogin/></span>
                }
            </div>
            <div className="navbar-bars">
                {
                    icon?<HiOutlineX onClick={handleNavX}/>:<HiOutlineBars3 onClick={handleNav}/>
                }
            </div>
            <IoIosArrowUp onClick={handleWindow} className='arrow'/>
        </div>
        <div id="toggle-navbar" className={navvisible}>
                <div className="toggle-navbar-links">
                    <Link to='/'>HOME</Link>
                    <Link to='products'>PRODUCTS</Link>
                    <Link to='blog'>BLOG</Link>
                    <Link to='contact'>CONTACT</Link>
                    <Link to='about'>ABOUT</Link>
                </div>
            </div>

        <div className="toggle-account">
                <span><BsPerson onClick={()=>{user?navigate("/profile"):navigate("/login")}}/></span>
                <span onClick={()=>{navigate('/wishlist')}}><CiHeart/><sup>{favs.length}</sup></span>
                <span onClick={()=>{navigate('/cart')}}><BsCart3/><sup>0</sup></span>
        </div>
        </>

    )
}

export default Navbar