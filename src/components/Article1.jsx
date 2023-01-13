import React from 'react';
import articleImg1 from '../assets/article/z2.JPG';

const Article1 = () => {
  return (
    <section id="zema1">
      <div className="article article-1">
        <div className="image-wrapper">
          <img src={articleImg1} className="image image-1" alt="article1"></img>
        </div>
        <div className="content-wrapper">
          <p className="text">
            halo! aunti and uncle, perkenalkan nama panjangku zema arrazka
            permadi. aunti and uncle bisa panggil aku zema. aku dilahirkan ibuku
            di hari kamis setelah azan subuh tepatnya di tanggal 25 agustus
            2022. dan zodiak ku sama dengan babaku yaitu virgo boy. pada saat
            aku lahir aku dibantu dengan ibu bidan wulan, kak junita dan dokter
            desi tak lupa babaku juga ikut serta dalam menolong ku ikut keluar.
            saat aku lahir lalu ditimbang berat badan lahir aku 2810 gram dan
            panjang badan aku 49 cm.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Article1;
