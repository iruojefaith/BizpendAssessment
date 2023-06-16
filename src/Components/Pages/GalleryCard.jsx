import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from 'react-icons/fa';

function Trending({ displayPhotos, loading, sliceTitle}) {
  const [resorts, setResorts] = useState([]);

 //callback function to render cards on and off of favorites page
function handleFavoriteResort(updatedResort){
  const updatedResortArray = resorts.map((resort) => {
    if(resort.id === updatedResort.id) {
      return updatedResort;
    } else {
      return resort
    }
  });
  setResorts(updatedResortArray);
}
  return (
    <div className='mx-[0] lg:mx-[3rem] md:mx-[1rem]'>
    {loading ? (
      <p>Loading...</p>
    ) :(
      <ul className='cards '>
        <li className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-[2rem]'>
          {displayPhotos?.map((photo ) => {
            return (
              <span className='card ' key={photo.id} >
                <img src={photo.thumbnailUrl} alt={photo.title}/>
                <div className="card_content">
                  <FaHeart />
                </div>
                <span className='card_content '>

                  <h2 className='card_title cursor-pointer ' >
                   <Link to={`/image/${photo.id}`}>{sliceTitle(photo.title, 18)}</Link>
                   <Link to={`/image/${photo.id}`}><button className="btn my-2">View Details</button></Link>
                  </h2>

                </span>
              </span>
            );
          })}
        </li>
      </ul>)}
    </div>
  );
}

export default Trending;
