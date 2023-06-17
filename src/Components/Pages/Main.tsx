import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import GalleryDisplay from "../Pages/GalleryCard";
import Search from "../Pages/Search";




interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  isFavorite: boolean;
}

const Main: React.FC = () => {
  const [displayPhotos, setdisplayPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [photos, setPhotos] = useState<Photo[]>([]);
   const [favorites, setFavorites] = useState<Photo[]>([]);
  const navigate = useNavigate();



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await response.json();
        setPhotos(data);
        setdisplayPhotos(data);
        setLoading(false);
         const photosWithFavorites = data.map((photo: Photo) => ({
          ...photo,
          isFavorite: false,
        }));
        setPhotos(photosWithFavorites);
      } catch (error) {
        console.log('Error:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

    useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handlePhotoClick = (id: number) => {
  navigate(`/image/${id}`);
};

  const toggleFavorite = (id: number) => {
    setPhotos((prevPhotos) =>
      prevPhotos.map((photo) =>
        photo.id === id ? { ...photo, isFavorite: !photo.isFavorite } : photo
      )
    );
  };

  useEffect(() => {
    const updatedFavorites = photos.filter((photo) => photo.isFavorite);
    setFavorites(updatedFavorites);
  }, [photos]);

   //this particular function is for search functionality
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const val = e.target.value;
    const matchingPhotos = photos.filter((photo) =>
      photo.title.toLowerCase().startsWith(val.toLowerCase())
    );
    setdisplayPhotos(matchingPhotos);
    setLoading(false);
  };


  //this particular section is to reduce the word length of the title
  const sliceTitle = (title: string, maxLength: number) => {
    if (title.length <= maxLength) {
      return title;
    }
    return title.slice(0, maxLength) + '...';
  };


  return (
    <div className='flex justify-center align-center '>
      <div className='w-full '>
        <div className='max-w-2xl mx-auto my-6 '>
          <Search handleChange={handleChange}  />
        </div>
        <div className='relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded'>
          <div className='px-4 py-5 flex-auto'>
            <div className='tab-content tab-space'>
              <div className=''>
                <GalleryDisplay toggleFavorite={toggleFavorite} handlePhotoClick={handlePhotoClick} loading={loading} displayPhotos={displayPhotos} sliceTitle={sliceTitle} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
