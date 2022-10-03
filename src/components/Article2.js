import React from 'react';
import articleImg2 from '../assets/article/z4.JPG';

const Article2 = () => {
  return (
    <section>
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
    </section>
  );
};

export default Article2;
