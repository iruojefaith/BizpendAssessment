import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Photo {
  id: number;
  title: string;
  url: string;
  description: string;
}

const ImageDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [photo, setPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/photos/${id}`
        );
        const data = await response.json();
        setPhoto(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchPhoto();
  }, [id]);

  if (!photo) {
    return <p className='text-[#282727d3] text-[2rem]'>Loading...</p>;
  }

  return (
    <div className='w-11/12 md:flex m-auto '>
      <div className='md:flex gap-6 mt-6 '>
        <h2 className='text-[#282727d3] font-bold text-[2rem] place-content-center md:mt-28 '>
          {photo.title}
        </h2>
        <img
          className='border-opacity-5 rounded-lg '
          src={photo.url}
          alt={photo.title}
        />
        <p>{photo.description}</p>
      </div>
    </div>
  );
};

export default ImageDetailsPage;
