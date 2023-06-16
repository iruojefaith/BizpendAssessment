import React from "react";
import { Link } from "react-router-dom";


function Trending({ displayPhotos, loading, sliceTitle}) {

  return (
    <div className='mx-[0] md:mx-[3rem] '>
    {loading ? (
      <p>Loading...</p>
    ) :(
      <ul className='cards '>
        <li className='grid grid-cols-2 md:grid-cols-5 gap-[2rem]'>
          {displayPhotos?.map((photo ) => {
            return (
              <span className='card ' key={photo.id} >
                <img src={photo.thumbnailUrl} alt={photo.title}/>

                <span className='card_content '>
                  <h2 className='card_title cursor-pointer ' >
                   <Link to={`/image/${photo.id}`}>{sliceTitle(photo.title, 15)}</Link>
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
