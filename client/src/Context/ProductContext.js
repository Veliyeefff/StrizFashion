import { createContext, useContext, useState } from "react";


const Context = createContext()

export const ProductProvider = ({children})=>{
    const [products,setProducts] = useState([])
    const [favs,setFavs] = useState([])
    const [productDetails,setProductDetails] = useState("")
    const [sortproducts,setSortProducts] = useState([])
    const data = {
        products,setProducts,productDetails,setProductDetails,favs,setFavs,sortproducts,setSortProducts
    }
    return(
        <Context.Provider value={data}>{children}</Context.Provider>
    )
}

export const useProvider =()=>useContext(Context)