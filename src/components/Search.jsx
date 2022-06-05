import { useState, useEffect } from 'react';
import NavBar from './NavBar';

const apiKey = process.env.REACT_APP_NASA_KEY; 

const Search = () => {
  const [photoData, setPhotoData] = useState(null);
  const [searchDate, setSearchDate] = useState('');

  async function fetchPhoto() {
    const data = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${searchDate}`)
    .then(res => res.json());

    setPhotoData(data);
    console.log(searchDate)
  }


  return (
    <div>
      <div>
        <input 
          type='date'
          name='date'
          value={searchDate}
          onChange={e => setSearchDate(e.target.value)}>
        </input>
        <button onClick={fetchPhoto}>Search</button>
      </div>

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

    </div>
  )
}

export default Search