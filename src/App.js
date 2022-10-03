import './App.scss';
import Banner from './components/Banner';
import Article1 from './components/Article1';
import Article2 from './components/Article2';
import Horizontal from './components/Horizontal';
import Newsletter from './components/Newsletter';
import Reserved from './components/Reserved';

function App() {
  const showArticle = true;

  return (
    <div className="App">
      <Banner />
      <Article1 />
      <Article2 />
      <Horizontal />
      <Newsletter />.
      <Reserved />
    </div>
  );
}

export default App;
