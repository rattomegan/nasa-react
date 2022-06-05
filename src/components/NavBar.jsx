import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/search'>Search Past Photos</Link>
      </ul>
    </div>
  )
}

export default NavBar