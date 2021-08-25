/** @format */

import { NavLink } from "react-router-dom";
import NavMain from "./NavMain";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import logo from "../images/logo.svg";

function Header() {
    const [toggleSearch, setToggleSearch] = useState(false);
    const [toggleFilter, seToggleFilter] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const searchToggle = () => {
        setToggleSearch(!toggleSearch);
    };
    const filterToggle = () => {
        seToggleFilter(!toggleFilter);
    };

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener("resize", changeWidth);
    }, []);

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

            <NavMain />

            {(toggleSearch || screenWidth > 800) && (
                <div className="search-bar">
                    <input type="text" placeholder="Search.." />
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
