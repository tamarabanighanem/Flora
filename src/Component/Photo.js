import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Photo = () => {
  const {id}=useParams()
  console.log(id)
  console.log(id)
  console.log(id)
  console.log(id)

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Fetch photos data for the specific album from the API
    axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      .then(response => {
        setPhotos(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      });
  }, [id]);

  return (
  <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    {photos.map((photo) => (
      <div key={photo.id} class="w-full p-1 md:p-2">
        <img
          alt={photo.title}
          class="block h-full w-full rounded-lg object-cover object-center"
          src={photo.thumbnailUrl}
        />
      </div>
    ))}
  </div>
</div>
  
  );
};

export default Photo;
