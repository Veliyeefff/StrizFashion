import React from 'react'
import { useProvider } from '../../../Context/ProductContext'
import './WIshlistProducts.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { BiHeart } from 'react-icons/bi';
import axios from 'axios';
import { useEffect } from 'react';
function WishlistProducts() {
    const {favs,setFavs} = useProvider()
    const navigate = useNavigate()
    let user = JSON.parse(localStorage.getItem("user"));
    useEffect(()=>{
        setFavs(user.userWishList)
    },[])
    const removeFav = async (id) =>{
        setFavs([...favs].filter(x=>x._id!==id))
        let newuser = {
            _id: user._id,
            username: user.username,
            isAdmin: user.isAdmin,
            password: user.password,
            email:user.email,
            userCard: user.userCard,
            userCheckout: user.userCheckout,
            userWishList: [...favs].filter(x => x._id !== id)
        }
        axios.put(`http://localhost:4000/users/${user._id}`,newuser)
        localStorage.setItem("user", JSON.stringify(newuser))
        toast.success('This product delete', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }

  return (
    <div id='wishlist-products'>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"/>
        <div className="wislist-products-list">
        {
            user && favs.length!==0?
            <div className='products-list-elements'>
            {
            favs.map(element=>(
                    <div className="list-element-products">
                        <div className='img-texts'>
                            <div className="list-element-image">
                                <img src={element.img} alt="" />
                            </div>
                            <div className="list-element-texts">
                                <h4 className='list-element-h4'>{element.title}</h4>
                                <p className='list-element-p'>${element.price}</p>
                            </div>
                        </div>
                        <div className="list-element-cart">
                            {
                                element.isStock?
                                <p className='addorread' onClick={()=>{navigate(`/details/${element._id}`)}}>Add To Cart <span></span></p>:
                                <p className='addorread' onClick={()=>{navigate(`/details/${element._id}`)}}>Read More <span></span></p>
                            }
                            <p className='rmv-wish' onClick={()=>removeFav(element._id)}>
                                Remove From Wishlist
                                <span></span>
                            </p>
                        </div>
                </div>
            ))
        }
        </div>
            :
            <div className='empty-wishlist'>
                <BiHeart/>
                <h3 className='empty-text'>Your wishlist is currently empty</h3>
            </div>
        }
    </div>
</div>
  )
}

export default WishlistProducts