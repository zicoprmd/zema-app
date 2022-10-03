import React from 'react';

const Newsletter = () => {
  const greeting = () => {
    alert('Email Submitted!');
  };

  return (
    <section>
      <div id="newsletter">
        <div className="title-wrapper">
          <h2 className="title-news">NEWSLETTER</h2>
        </div>
        <div className="forms-wrapper">
          <input placeholder="Email" />
          <button onClick={greeting}>Submit</button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
