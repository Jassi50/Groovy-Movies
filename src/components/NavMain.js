import { NavLink } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {useState, useEffect} from 'react';
import hover from '../images/LightHover.png'



function NavMain() {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] =useState(window.innerWidth)
    

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(()=> {

         const changeWidth = () => {
             setScreenWidth(window.innerWidth)
            }
            window.addEventListener('resize', changeWidth)
    }, [])



    return (
        <div className="nav-container">
           
          <label onClick={toggleNav} className="btn" for="toggle"><FaBars/></label>
        <nav className="nav">
            {(toggleMenu || screenWidth > 800) && ( <ul className="menu">
              <li><NavLink to="/" exact>
              <img className="hover" src={hover} alt="hover-effect"/>
                  Home</NavLink></li>
              <li><NavLink to="/about"> <img className="hover" src={hover} alt="hover-effect"/>About</NavLink></li>
              <li><NavLink to="/favorites" ><img className="hover favorites" src={hover} alt="hover-effect"/>Favorites</NavLink></li>
          </ul>  )}
            
           
         
        
           
        </nav>
      

        </div>
    )
}

export default NavMain
