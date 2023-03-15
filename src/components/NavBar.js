import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components'; 

const List = styled.ul`
    text-align: center;
    display:flex;
    justify-content:space-evenly;
    list-style-type: none;
    background: ;
`


const NavBar = () => {

    return (
        <nav>
            <List>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/records">Records</Link>
                </li>
                <li>
                    <Link to="/basket">Basket</Link>
                </li>
            </List>
        </nav>



    )
}

export default NavBar;