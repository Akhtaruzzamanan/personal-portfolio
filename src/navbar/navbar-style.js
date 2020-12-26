import styled from 'styled-components'
import {Navbar } from 'reactstrap'

const CustomNavbar = styled(Navbar)`
    position: fixed;
    width: 100%;
    z-index: 999;
    padding: ${props => props.scrolled ? '5px 0' : '20px 0'}; // when page scrolled, navbar padding on 15px
    background-color: ${props => props.scrolled ? 'crimson' : 'none'}; // when page scrolled, navbar background-color is crimson
    transition: all 0.3s ease;
    font-family: 'Ubuntu', sans-serif;
`;

// Navbar brand design
const Logo = styled.span`
    font-size: 35px;
    font-weight: 600;
    color: #ffffff;
    cursor: pointer;

`;

const LogoSpan = styled.span`
    color: ${props => props.scrolled ? '#ffffff' : 'crimson'}; // when page scrolled, navbar text-color is #ffffff

    &:hover {color: ${props => props.scrolled ? '#81ecec' : '#ffffff'}}
`;

// Navbar Link Desingn
const NavMenu = styled.span`
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {color: ${props => props.scrolled ? 'aqua' : 'crimson'}}; // when page scrolled, navbar text-color is aqua
`;

export {CustomNavbar, Logo, LogoSpan, NavMenu}