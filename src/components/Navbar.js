import react from "react";
import { NavLink } from "react-router-dom";
import '../styling/Navbar.css';
import Login from "../login/Login";


const Navbar = (props) => {

    return (
        <header className="main-header">
            <div>
                <a href="index.html"
                    className="main-header__ref">
                    Profile
                </a>
            </div>
            <nav className="main-nav">
                <ul className="main-nav__items">
                    <li className="main-nav__item">
                        <NavLink to="/login">
                            Login
                        </NavLink>
                    </li>
                    <li className="main-nav__item">
                        <NavLink to="/signup">Sign up</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Navbar;