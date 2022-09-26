import logo from './logo.svg';
import './App.scss';

import banner from '../src/assets/banner/banner_1.JPG';
import articleImg1 from '../src/assets/article/z2.JPG';
import articleImg2 from '../src/assets/article/z4.JPG';
import img1 from '../src/assets/img/z1.JPG';
import img2 from '../src/assets/img/z5.JPG';
import img3 from '../src/assets/img/z6.JPG';
import img4 from '../src/assets/img/z7.JPG';
import img5 from '../src/assets/img/z8.JPG';
import img6 from '../src/assets/img/z9.JPG';
import img7 from '../src/assets/img/z10.JPG';
import img8 from '../src/assets/img/z11.JPG';
import img9 from '../src/assets/img/z12.JPG';
import img10 from '../src/assets/img/z13.JPG';

function App() {
  return (
    <div className="App">
      <div id="banner">
        <img src={banner} className="image-banner" />
      </div>
      <div className="judul">
        <h1 className="nama-anak">Zema Arazka Permadi</h1>
      </div>
      <div className="article article-1">
        <div className="image-wrapper">
          <img src={articleImg1} className="image image-1"></img>
        </div>
        <div className="content-wrapper">
          <p className="text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="article article-2">
        <div className="image-wrapper imgwrp-mobile">
          <img src={articleImg2} className="image image-2"></img>
        </div>
        <div className="content-wrapper">
          <p className="text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="image-wrapper imgwrp-dom">
          <img src={articleImg2} className="image image-2"></img>
        </div>
      </div>
      <div id="horizontal">
        <div className="image-wrapper">
          <img src={img1} className="image image-1" />
        </div>
        <div className="image-wrapper">
          <img src={img3} className="image image-2" />
        </div>
        <div className="image-wrapper">
          <img src={img2} className="image image-3" />
        </div>
        <div className="image-wrapper">
          <img src={img4} className="image image-4" />
        </div>
        <div className="image-wrapper">
          <img src={img10} className="image image-5" />
        </div>
        <div className="image-wrapper">
          <img src={img7} className="image image-6" />
        </div>
        <div className="image-wrapper">
          <img src={img6} className="image image-7" />
        </div>
        <div className="image-wrapper">
          <img src={img8} className="image image-8" />
        </div>
        <div className="image-wrapper">
          <img src={img9} className="image image-9" />
        </div>
        <div className="image-wrapper">
          <img src={img5} className="image image-10" />
        </div>
      </div>
      <div id="newsletter">
        <div className="title-wrapper">
          <h2 className="title-news">NEWSLETTER</h2>
        </div>
        <div className="forms-wrapper">
          <input placeholder="Email" />
          <button>Submit</button>
        </div>
      </div>
      <div className="reserved">
        <p>
          All right reserved, created by
          <a href="https://twitter.com/zicoprmd" target="blank">
            {' '}
            zico permadi
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
