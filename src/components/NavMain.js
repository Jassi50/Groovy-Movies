import { NavLink } from 'react-router-dom';

function NavMain() {
    return (
        <nav>
          <ul>
              <li><NavLink to="/" exact>Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/favorites">Favorites</NavLink></li>
          </ul>  
        </nav>
    )
}

export default NavMain
