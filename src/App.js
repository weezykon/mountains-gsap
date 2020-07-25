import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { gsap } from 'gsap';
import "./styles/App.scss";
import Header from './components/Header'
import Cursor from './components/Cursor'
import Navigation from './components/Navigation'

// pages
import Home from './pages/home'
import Approach from './pages/approach'
import About from './pages/about'
import CaseStudies from './pages/caseStudies'
import Services from './pages/services'

// routes config
const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/cases', name: 'Case Studies', Component: CaseStudies },
  { path: '/approach', name: 'Approach', Component: Approach },
  { path: '/services', name: 'Services', Component: Services },
  { path: '/about', name: 'About', Component: About },
];

function App() {
  // Animations
  // prevent flashing
  gsap.to('body', 0, { css: { visibility: 'visible' } });
  useEffect(() => {
    // let vh = window.innerHeight * .01;
    // document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  return (
    <>
      <Cursor />
      <Header />
      <div className='App'>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
      <Navigation />
    </>
  );
}

export default App;
