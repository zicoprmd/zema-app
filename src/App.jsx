import './App.scss';
import React from 'react';
import Banner from './Banner/Banner';
import Nav from './components/Nav/Nav';
import Article1 from './components/Article1';
import Article2 from './components/Article2';
import Horizontal from './components/Horizontal';
import Newsletter from './components/Newsletter';
import Reserved from './components/Reserved';
import Test from './components/latihan/test';

function App() {
  const showArticle = true;

  return (
    <div className="App">
      <Banner />
      <Nav />
      <Article1 />
      <Article2 />
      <Horizontal />
      <Newsletter />
      <Reserved />
    </div>
  );
}

export default App;
