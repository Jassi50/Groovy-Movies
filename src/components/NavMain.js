import { NavLink } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {useState, useEffect} from 'react';

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
        <>
          <label onClick={toggleNav} className="btn" for="toggle"><FaBars/></label>
        <nav className="nav">
            {(toggleMenu || screenWidth > 800) && ( <ul className="menu">
              <li><NavLink to="/" exact>Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/favorites">Favorites</NavLink></li>
          </ul>  )}
            
           
         
        
           
        </nav>
      

        </>
    )
}

export default NavMain
