import React from "react";
import { Filter, Action, Footer, Carousel, Banner, Testimonial } from './containers';
import { Navbar } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Carousel />
      <Action />
      <Filter />
      <Testimonial />
      <Footer />

    </div>
  );
}

export default App;
