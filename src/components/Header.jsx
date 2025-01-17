import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from "./Navbar";
import styled from 'styled-components';

const Header = () =>{
    return (
        <MainHeader>
            <NavLink>
            <img src="./images/logo1.jpg" alt="logo" className='logo'/>
            </NavLink>
            <Navbar/>
        </MainHeader> 
    );
};

const MainHeader = styled.header`
padding:0 4.8rem;
height:10rem;
background-color:${({theme})=>theme.colors.bg};
display:flex;
justify-content:space-between;
align-items:center;  

.logo{
    height:200px;
    max-width:400px;
}
`;
export default Header;