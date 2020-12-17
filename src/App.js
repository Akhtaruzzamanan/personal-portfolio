import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import About from './about-section/About';
import './App.css';
import Home from './home-section/Home';
import PortfolioNavbar from './navbar/PortfolioNavbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch exact >
          <Route exact >
            <PortfolioNavbar/>
            <Home/>
            <About/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
