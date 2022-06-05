import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className='navbar'>
        {location.pathname === '/'  ?
          <ul></ul>
        :
          <ul>
            <Link to='/'>Home</Link>
            <Link to='/search'>Search Past Photos</Link>
            <Link to='/today'>Today's Photo</Link>
          </ul>
        }  
    </nav>
  )
}

export default NavBar