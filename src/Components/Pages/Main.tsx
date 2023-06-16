import React, { useEffect, useState } from "react";
import GalleryDisplay from "../Pages/GalleryCard";
import Search from "../Pages/Search";


interface Photo {
  id: number;
  title: string;
  url: string;
}

const Main: React.FC = () => {
  const [displayPhotos, setdisplayPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [photos, setPhotos] = useState<Photo[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await response.json();
        setPhotos(data);
        setdisplayPhotos(data);
        setLoading(false);
      } catch (error) {
        console.log('Error:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const val = e.target.value;
    const matchingPhotos = photos.filter((photo) =>
      photo.title.toLowerCase().startsWith(val.toLowerCase())
    );
    setdisplayPhotos(matchingPhotos);
    setLoading(false);
  };



  return (
    <div className='flex justify-center align-center '>
      <div className='w-full '>
        <div className='max-w-2xl mx-auto'>
          <Search handleChange={handleChange}  />
        </div>
        <div className='relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded'>
          <div className='px-4 py-5 flex-auto'>
            <div className='tab-content tab-space'>
              <div className=''>
                <GalleryDisplay  loading={loading} displayPhotos={displayPhotos} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
