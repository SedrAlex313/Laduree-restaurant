import React from 'react';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
import Main from './components/Main/Main';
import Principle from './container/Principle/Principle';
import Blog from './container/Blog/Blog';
const App = () => (
  <div>
    {/* <Navbar /> */}
    {/* <SpecialMenu />
    <FindUs />
    <Footer />   */}
    <Main />
    <AboutUs />
   < SpecialMenu />
   <Chef />
   {/* <Blog /> */}
   <Intro />
   <Laurels />
   <Gallery />




    <Principle />

    {/* <Header /> */}

  </div>
);

export default App;
