/** @format */

import { NavLink } from "react-router-dom";
// import NavMain from "./NavMain";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import logo from "../images/logo.svg";

import hover from "../images/LightHover.png";
import { FaBars } from "react-icons/fa";

function Header() {
    const [toggleSearch, setToggleSearch] = useState(false);
    const [toggleFilter, setToggleFilter] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const searchToggle = () => {
        if (toggleFilter == true) {
            setToggleFilter(false);
        }
        if (toggleMenu == true) {
            setToggleMenu(false);
        }
        setToggleSearch(!toggleSearch);
    };
    const filterToggle = () => {
        if (toggleSearch == true) {
            setToggleSearch(false);
        }
        if (toggleMenu == true) {
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

    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidthNav, setScreenWidthNav] = useState(window.innerWidth);

    const toggleNav = () => {
        if (toggleFilter == true) {
            setToggleFilter(false);
        }
        if (toggleSearch == true) {
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

    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    return (
        <header>
            {/*This will later become an image to reflect my logo */}
            <h1>
                <NavLink to="/">
                    <img className="logo" src={logo} alt="logo" />
                </NavLink>
            </h1>

            <FaSearch onClick={searchToggle} className="search-icon" />

            <label onClick={filterToggle} className="btn-filter" for="toggle">
                <FaFilter onClick={filterToggle} className="filter-icon" />
            </label>

            {/* <NavMain /> */}
            <div className="nav-container">
                <label onClick={toggleNav} className="btn" for="toggle">
                    <FaBars />
                </label>
                <nav className="nav">
                    {(toggleMenu || screenWidthNav > 800) && (
                        <ul className="menu">
                            <li>
                                <NavLink to="/" exact>
                                    <img
                                        className="hover"
                                        src={hover}
                                        alt="hover-effect"
                                    />
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">
                                    {" "}
                                    <img
                                        className="hover"
                                        src={hover}
                                        alt="hover-effect"
                                    />
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/favorites">
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

            {(toggleSearch || screenWidth > 800) && (
                <div className="search-bar">
                    <input type="text" placeholder="Search.." id="search" />
                    <label htmlFor="search"></label>
                </div>
            )}

            {toggleFilter && (
                <nav className="nav-sort1">
                    <ul>
                        <li>
                            <NavLink to="/sort/popular">Popular</NavLink>
                        </li>
                        <li>
                            <NavLink to="/sort/top-rated">Top Rated</NavLink>
                        </li>
                        <li>
                            <NavLink to="/sort/in-theatres">
                                In Theatres
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/sort/comming-soon">
                                Coming Soon
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            )}

            {/* <FaSearch className="search-icon-mobile" /> */}
        </header>
    );
}

export default Header;
