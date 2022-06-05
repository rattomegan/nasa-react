import { useState } from 'react';
import Photo from './Photo';

const apiKey = process.env.REACT_APP_NASA_KEY; 

const Search = () => {
  const [photoData, setPhotoData] = useState(null);
  const [searchDate, setSearchDate] = useState('');

  async function fetchPhoto() {
    const data = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${searchDate}`)
    .then(res => res.json());

    setPhotoData(data);
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

     <Photo photoData={photoData} />
    </div>
  )
}

export default Search