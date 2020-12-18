import React, {useState, useEffect} from 'react';

// ReactStrap desing Navbar
import {
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    NavbarBrand,
    NavLink
} from 'reactstrap';
  
// Navbar Custom Style  
import {CustomNavbar, Logo, LogoSpan, NavMenu} from './navbar-style'

function PortfolioNavbar (props){

    // Toggle Function Here Start
    const [click, setClick] = useState(false);
  
    const toggle = () => setClick(!click);
    const closeMenu = () => setClick(false)
    // Toggle Function Here End
  
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
  
      <>
        <CustomNavbar expand="md" scrolled = {scrolled} >
          <div className = "container px-4">
          <NavbarBrand scrolled = {scrolled} to="/" className = "navbar-brand"><Logo>Portfo<LogoSpan scrolled = {scrolled}>lio.</LogoSpan></Logo></NavbarBrand>
            <NavbarToggler onClick={toggle} style = {{fontSize: "1.8rem", color: "#ffffff"}}>
              <i className = {click ? "fas fa-times" : "fas fa-bars"}/>
            </NavbarToggler>
            <Collapse isOpen={click} navbar >
              <Nav className="ml-auto nav-menu text-uppercase" navbar>
                <NavItem>
                  <NavLink to="/" onClick = {closeMenu}><NavMenu scrolled = {scrolled} >home</NavMenu></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/about" onClick = {closeMenu}><NavMenu scrolled = {scrolled} >about</NavMenu></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/services" onClick = {closeMenu}><NavMenu scrolled = {scrolled} >services</NavMenu></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/skills" onClick = {closeMenu}><NavMenu scrolled = {scrolled} >skills</NavMenu></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/teams" onClick = {closeMenu}><NavMenu scrolled = {scrolled} >teams</NavMenu></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/contact" onClick = {closeMenu}><NavMenu scrolled = {scrolled} >contact</NavMenu></NavLink>
                </NavItem>
              </Nav>
              {/* <NavbarText className = 'ml-2'>Simple Text</NavbarText> */}
            </Collapse>
            </div>
        </CustomNavbar>
      </>
  
    );
  }

export default PortfolioNavbar
