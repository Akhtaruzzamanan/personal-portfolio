// Navbar Styling
import styled from 'styled-components';

const Navbar = styled.nav`
    position: fixed;
    width: 100%;
    padding: ${props => props.scrolled ? '15px 0' : '30px 0'}; // when page scrolled, navbar padding on 15px
    background-color: ${props => props.scrolled ? 'crimson' : 'none'}; // when page scrolled, navbar background-color is crimson
    transition: all 0.3s ease;
    font-family: 'Ubuntu', sans-serif;
`;

const MaxWidth = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.span`
    font-size: 2rem;
    font-weight: 600;
    color: #ffffff;
    // text-color: #fff;

`;

const LogoSpan = styled.span`
    color: ${props => props.scrolled ? '#ffffff' : 'crimson'}; // when page scrolled, navbar text-color is #ffffff
`;

const ListLink = styled.span`
    color: #ffffff;
    font-size: 1rem;
    font-weight: 500;
    margin-left: 25px;
    transition: color 0.3s ease;
 
    &:hover {color: ${props => props.scrolled ? 'aqua' : 'crimson'}}; // when page scrolled, navbar text-color is aqua
`;

const NavList = styled.li`
    list-style: none;
    display: inline-block;
`;

const Menu = styled.ul`
    color: #fff;
`;


export {Navbar, MaxWidth, Logo, ListLink, NavList, Menu, LogoSpan}