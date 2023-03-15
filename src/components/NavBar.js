import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/records">Records</Link>
                </li>
                <li>
                    <Link to="/basket">Basket</Link>
                </li>
            </ul>
        </nav>



    )
}

export default NavBar;