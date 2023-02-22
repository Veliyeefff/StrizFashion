import React from 'react'
import {HiOutlineX} from 'react-icons/hi'
import disableScroll from 'disable-scroll';
import './Video.css'
import '../SummerCollection/Summer.css'
function Video({video,setVideo}) {
    const handleClick =()=>{
        setVideo(null);
        disableScroll.off()
    }
  return (
    <div id='videoo' className={video}>
        <div className="video-player">
        <HiOutlineX onClick={handleClick}/>
        <iframe width="1000" height="600" src="https://www.youtube.com/embed/rKZT4_aaOOY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    </div>
  )
}

export default Video