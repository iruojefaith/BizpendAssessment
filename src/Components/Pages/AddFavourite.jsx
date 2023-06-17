import React, { useState } from "react";
import GalleryCard from "./GalleryCard";

const AddFavorite = () => {
  const [photos, setPhotos] = useState([
    { id: 1, title: "Photo 1", thumbnailUrl: "url", isFavorite: false },
    { id: 2, title: "Photo 2", thumbnailUrl: "url", isFavorite: false },
    { id: 3, title: "Photo 3", thumbnailUrl: "url", isFavorite: false },
    // ... more photos
  ]);

  const handleFavorite = (id) => {
    const updatedPhotos = photos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });

    setPhotos(updatedPhotos);
  };

  return (
    <div>
      {photos.map((photo) => (
        <GalleryCard key={photo.id} photo={photo} handleFavorite={handleFavorite} />
      ))}
    </div>
  );
};

export default AddFavorite;
