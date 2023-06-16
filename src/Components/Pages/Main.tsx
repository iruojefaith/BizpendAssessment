import React, { useEffect, useState } from "react";
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
                <GalleryDisplay  loading={loading} displayPhotos={displayPhotos} sliceTitle={sliceTitle}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
