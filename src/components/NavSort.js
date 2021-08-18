import { NavLink } from 'react-router-dom';

function NavSort() {
    return (
        <nav className="nav-sort">
          <ul>
              <li><NavLink to="/sort/popular">Popular</NavLink></li>
              <li><NavLink to="/sort/top-rated">Top Rated</NavLink></li>
              <li><NavLink to="/sort/in-theatres">In Theatres</NavLink></li>
              <li><NavLink to="/sort/comming-soon">Coming Soon</NavLink></li>
          </ul>  
        </nav>
    )
}

export default NavSort
