import React from "react";
import { Link } from "react-router-dom";


function Trending({ displayPhotos, loading}) {

  return (
    <div className='mx-[0] md:mx-[3rem] '>
    {loading ? (
      <p>Loading...</p>
    ) :(
      <ul className='cards '>
        <li className='grid grid-cols-2 md:grid-cols-5 gap-[2rem]'>
          {displayPhotos?.map((photo, index) => {
            return (
              <span className='card ' key={index} >
                <img src={photo.url} alt={photo.title}/>

                <span className='card_content '>
                  <h2 className='card_title cursor-pointer '>
                    <Link to={`./singlemovie`}> {photo.title} </Link>
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
