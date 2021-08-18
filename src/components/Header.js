import { NavLink } from 'react-router-dom';
import NavMain from './NavMain'

function Header() {
    return (
        <header>
            {/*This will later become an image to reflect my logo */}
            <h1><NavLink to="/">Groovy Movies</NavLink></h1> 
            <NavMain />

            <div className="search-bar">
				<input type="text" placeholder="Search.." />
			</div>
        </header>
    )
}

export default Header
