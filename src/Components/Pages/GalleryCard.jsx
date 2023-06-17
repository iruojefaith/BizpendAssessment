import { useState } from "react";
import ImageCard from "./ImageCard";

function GalleryDisplay({
  displayPhotos,
  loading,
  sliceTitle,
  toggleFavorite,
}) {
  const [resorts, setResorts] = useState([]);

  //callback function to render cards on and off of favorites page
  function handleFavoriteResort(updatedResort) {
    const updatedResortArray = resorts.map((resort) => {
      if (resort.id === updatedResort.id) {
        return updatedResort;
      } else {
        return resort;
      }
    });
    setResorts(updatedResortArray);
  }
  return (
    <div className='mx-[0] lg:mx-[3rem] md:mx-[1rem]'>
      {loading ? (
        <p className='text-[#282727d3] text-[2rem]'>Loading...</p>
      ) : (
        <ul className='cards '>
          <li className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-[2rem]'>
            {displayPhotos?.map((photo, key) => {
              return (
                <ImageCard key={key} sliceTitle={sliceTitle} photo={photo} />
              );
            })}
          </li>
        </ul>
      )}
    </div>
  );
}

export default GalleryDisplay;
