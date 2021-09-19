/** @format */

import { NavLink } from "react-router-dom";
// import NavMain from "./NavMain";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import logo from "../images/logo.png";

import hover from "../images/LightHover.png";
import { FaBars } from "react-icons/fa";
import HeaderSearch from "./HeaderSearch";

function Header({ handleSearch }) {
    const [toggleSearch, setToggleSearch] = useState(false);
    const [toggleFilter, setToggleFilter] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidthNav, setScreenWidthNav] = useState(window.innerWidth);

    const searchToggle = () => {
        if (toggleFilter === true) {
            setToggleFilter(false);
        }
        if (toggleMenu === true) {
            setToggleMenu(false);
        }
        setToggleSearch(!toggleSearch);
    };
    const filterToggle = () => {
        if (toggleSearch === true) {
            setToggleSearch(false);
        }
        if (toggleMenu === true) {
            setToggleMenu(false);
        }
        setToggleFilter(!toggleFilter);
    };

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener("resize", changeWidth);
    }, []);

    //nav sort  section
    const toggleNav = () => {
        if (toggleFilter === true) {
            setToggleFilter(false);
        }
        if (toggleSearch === true) {
            setToggleSearch(false);
        }

        setToggleMenu(!toggleMenu);
    };

    useEffect(() => {
        const changeWidthNav = () => {
            setScreenWidthNav(window.innerWidth);
        };
        window.addEventListener("resize", changeWidthNav);
    }, []);

    return (
        <>
            <header>
                {/*This will later become an image to reflect my logo */}
                {/* Header Icons */}
                <h1>
                    <NavLink to="/">
                        <img className="logo" src={logo} alt="logo" />
                    </NavLink>
                </h1>

                <FaSearch onClick={searchToggle} className="search-icon" />
                {screenWidth > 800 && (
                    <HeaderSearch className="search-bar2" handleSearch={handleSearch} />
                )}

                <label
                    onClick={filterToggle}
                    className="btn-filter"
                    htmlFor="toggle"
                >
                    <FaFilter onClick={filterToggle} className="filter-icon" />
                </label>
                {/* Header Icons end*/}

                {/* <NavSort /> */}
                <div className="nav-container">
                    <label onClick={toggleNav} className="btn" htmlFor="toggle">
                        <FaBars />
                    </label>
                    <nav className="nav">
                        {(toggleMenu || screenWidthNav > 800) && (
                            <ul className="menu">
                                <li>
                                    <NavLink to="/" exact onClick={toggleNav}>
                                        <img
                                            className="hover"
                                            src={hover}
                                            alt="hover-effect"
                                        />
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" onClick={toggleNav}>
                                        <img
                                            className="hover"
                                            src={hover}
                                            alt="hover-effect"
                                        />
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/favorites"
                                        onClick={toggleNav}
                                    >
                                        <img
                                            className="hover favorites"
                                            src={hover}
                                            alt="hover-effect"
                                        />
                                        Favorites
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </nav>
                </div>

                {toggleSearch && (
                    <HeaderSearch className="search-bar" handleSearch={handleSearch} />
                )}

                {/* <FaSearch className="search-icon-mobile" /> */}
            </header>
            {(toggleFilter || screenWidthNav > 800) && (
                <div>
                    <nav className="nav-sort1">
                        <NavLink to="/sort/popular" onClick={filterToggle}>
                            Popular
                        </NavLink>

                        <NavLink to="/sort/top-rated" onClick={filterToggle}>
                            Top Rated
                        </NavLink>

                        <NavLink to="/sort/in-theatres" onClick={filterToggle}>
                            In Theatres
                        </NavLink>

                        <NavLink to="/sort/coming-soon" onClick={filterToggle}>
                            Coming Soon
                        </NavLink>
                        <div id="animate"></div>
                    </nav>
                </div>
            )}
        </>
    );
}

export default Header;
