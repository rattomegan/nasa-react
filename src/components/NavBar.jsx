import { NavLink, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className='navbar'>
      <div>NASA API</div>
        {location.pathname === '/'  ?
          <ul></ul>
        :
          <ul className='navlist'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/search'>Search Past Photos</NavLink></li>
            <li><NavLink to='/today'>Today's Photo</NavLink></li>
          </ul>
        }  
    </nav>
  )
}

export default NavBar