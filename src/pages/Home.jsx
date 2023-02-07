import Header from '../templates/Header';
import Carrousel from '../templates/Carrousel';
import Inmuebles from '../templates/Inmuebles';
import Blog from '../templates/Blog';
import About from '../templates/About';

import React from "react";
import SlideProperty from "../templates/SlideProperty";
const Home = () => {

  return (
    <>
      <Header/>
      <Carrousel/>
      <Inmuebles/>
      <Blog/>
      <About/>
      <SlideProperty/>
    </>
  );
}

export default Home;