import React, { useState } from 'react';
import './test.scss';

const Test = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>hitung saya {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>tambah</button>
    </>
  );
};

export default Test;
