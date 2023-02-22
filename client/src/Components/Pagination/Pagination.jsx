import React, {useState } from 'react'
import './Pagination.css'
import Loading from '../Loading/Loading'
function Pagination({totalProducts,postPerPage,setCurrentPage,currentPage}) {
    let pages = []
    for(let i=1;i<=Math.ceil(totalProducts/postPerPage);i++){
        pages.push(i)
    }

    const [loading,setLoading] = useState(false)
    const handlePage=(element) =>{
        setTimeout(()=>{
            setCurrentPage(element)
        },1500)
    }
    
  return (
    <div id='pagination'>
        {
            pages.map((element,index)=>(
                <button key={index}  onClick={()=>handlePage(element)} className=
                {
                    element===currentPage ? 'active-btns':'pag-btns'
                }>{element}</button>
            ))
        }

    </div>
  )
}

export default Pagination