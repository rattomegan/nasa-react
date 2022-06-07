import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='homeButton'>
      <Link to='/today' className='homeLink'>Enter the stars!</Link>
      <p>View Nasa's photo of the day, or search past daily photos.</p>
    </div>
  )
}

export default Home