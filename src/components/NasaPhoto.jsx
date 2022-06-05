import { useState, useEffect } from 'react';

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
  
  console.log(photoData)
  // if (!photoData) return <div>No current data..</div>

  return (
    <>
      {
        !photoData ?
          <div></div>
        :
          <div>
            {photoData.media_type === 'image' ?
              <img
                src={photoData.url}
                alt={photoData.title}
              /> 
            : 
              <iframe 
                title='space-video'
                src={photoData.url}
                frameBorder='0'
                gesture='media'
                allow='encryped-media'
                allowFullScreen
                className='photo'
              />
            }
   
            <div>
              <h1>{photoData.title}</h1>
              <p>{photoData.date}</p>
              <p>{photoData.explanation}</p>
            </div>

          </div>
      }
    </>

  )
}

export default NasaPhoto