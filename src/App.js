import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import About from './about-section/About';
import './App.css';
import Contact from './contact/Contact';
import Home from './home-section/Home';
import PortfolioNavbar from './navbar/PortfolioNavbar';
import Services from './services-section/Services';
import Skills from './skills-section/Skills';
import Teams from './teams-section/Teams';
import Footer from './footer/Footer.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch exact >
          <Route exact >
            <PortfolioNavbar/>
            <Home/>
            <About/>
            <Services/>
            <Skills/>
            <Teams/>
            <Contact/>
            <Footer/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
