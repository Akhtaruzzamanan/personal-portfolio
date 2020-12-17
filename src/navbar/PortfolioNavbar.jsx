import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import {Navbar, MaxWidth, Logo, ListLink, NavList, Menu, LogoSpan} from './navbar-style';



function PortfolioNavbar() {

    // sticky navbar Logic start

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        console.log(offset)
        if (offset > 75) {
            setScrolled(true);
        }
        else {
            setScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })


    // navbar sticky logic end

    return (
        <Navbar scrolled = {scrolled} > {/**{scrolled} is call when page scrolled. and (scrolled) is a props in navbar-style.js  */}
            <MaxWidth className="max-width">
                <div>
                    <Link to="/"><Logo>Portfo<LogoSpan scrolled = {scrolled}>lio.</LogoSpan></Logo></Link> {/**{scrolled} is call when page scrolled. and (scrolled) is a props in navbar-style.js  */}
                </div>
                <Menu class="menu">
                    <NavList> <Link to="/"> <ListLink scrolled = {scrolled} >Home</ListLink> </Link> </NavList>
                    <NavList> <Link to="/"> <ListLink scrolled = {scrolled} >About</ListLink> </Link> </NavList>
                    <NavList> <Link to="/"> <ListLink scrolled = {scrolled} >Services</ListLink> </Link> </NavList>
                    <NavList> <Link to="/"> <ListLink scrolled = {scrolled} >Skills</ListLink> </Link> </NavList>
                    <NavList> <Link to="/"> <ListLink scrolled = {scrolled} >Teams</ListLink> </Link> </NavList>
                    <NavList> <Link to="/"> <ListLink scrolled = {scrolled} >Contact</ListLink> </Link> </NavList>
                </Menu>
            </MaxWidth>
        </Navbar>
    )
}

export default PortfolioNavbar
