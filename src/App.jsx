import './App.scss';
import React from 'react';
import Banner from './components/Banner/Banner';
import Nav from './components/Nav/Nav';
import Article1 from './components/Article1';
import Article2 from './components/Article2';
import Horizontal from './components/Horizontal/Horizontal';
import Slideshow from './components/Slideshow/Slideshow';
import Newsletter from './components/Newsletter/Newsletter';
import Reserved from './components/Reserved/Reserved';

function App() {
  const showArticle = true;

  return (
    <div className="App">
      <Banner />
      <Nav />
      <Article1 />
      <Article2 />
      <Horizontal />
      <Slideshow />
      <Newsletter />
      <Reserved />
    </div>
  );
}

export default App;
