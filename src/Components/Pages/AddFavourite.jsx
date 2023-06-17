import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";

const AddFavorite = () => {
  const [photos, setPhotos] = useState([]);
  const sliceTitle = (title, maxLength) => {
    if (title.length <= maxLength) {
      return title;
    }
    return title.slice(0, maxLength) + "...";
  };

  useEffect(() => {
    const allFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setPhotos(allFavorites);
  }, []);

  console.log({ photos });

  return (
    <div>
      <li className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-[2rem]'>
        {photos?.map((photo, key) => {
          return <ImageCard key={key} sliceTitle={sliceTitle} photo={photo} />;
        })}
      </li>
    </div>
  );
};

export default AddFavorite;
