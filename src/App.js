import logo from './logo.svg';
import './App.css';

import banner from '../src/assets/banner/banner_1.JPG';
import articleImg1 from '../src/assets/article/IMG_9740.JPG';
import articleImg2 from '../src/assets/article/IMG_9749.JPG';
import articleImg3 from '../src/assets/article/IMG_9754.JPG';
import img1 from '../src/assets/img/IMG_9742.JPG';
import img2 from '../src/assets/img/IMG_9743.JPG';
import img3 from '../src/assets/img/IMG_9744.JPG';
import img4 from '../src/assets/img/IMG_9747.JPG';
import img5 from '../src/assets/img/IMG_9755.JPG';

function App() {
  return (
    <div className="App">
      <div id="banner">
        <img src={banner} className="image-banner" />
      </div>
      <div className="article"></div>
      <div className="article"></div>
      <div className="horizontal"></div>
      <div className="newsletter"></div>
    </div>
  );
}

export default App;
