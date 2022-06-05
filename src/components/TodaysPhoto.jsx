import { useState, useEffect } from 'react';
import Photo from './Photo';

// import apiKey from env file
const apiKey = process.env.REACT_APP_NASA_KEY;

const NasaPhoto = () => {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const data = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then(res => res.json());
      

      setPhotoData(data);
    }
  }, []);

  return (
    <>
      <Photo photoData={photoData} />
    </>

  )
}

export default NasaPhoto