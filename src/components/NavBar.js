import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components'; 

const HeaderText = styled.h1`
    text-align: center;
    display:flex;
    justify-content:space-evenly;
`

const List = styled.ul`
    text-align: center;
    display:flex;
    justify-content:space-evenly;
    list-style-type: none;
`





const NavBar = () => {

    return (
        <nav>
            <HeaderText>CodeClan Records</HeaderText>
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