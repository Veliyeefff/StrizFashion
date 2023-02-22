import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Products from './Pages/Products'
import OnSale from './Pages/OnSale'
import Details from './Pages/Details'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import { Provider } from 'react-redux';
import { store } from "./Config/Store";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:"/blog",
            element:<Blog/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/products",
            element:<Products/>
        },
        {
            path:"/onsale",
            element:<OnSale/>
        },
        {
            path:"/details/:prodid",
            element:<Details/>
        },
        {
            path:"/wishlist",
            element:<Wishlist/>
        },
        {
            path:"/cart",
            element:<Cart/>
        },
        {
            path:"/profile",
            element:<Profile/>
        }
      ],
    },
    {
        path:'/signup',
        element:<SignUp/>
    },
    {
        path:'/login',
        element:<Login/>
    }
  ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
