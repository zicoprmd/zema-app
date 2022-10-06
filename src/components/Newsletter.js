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
        <form
          method="POST"
          action="https://formsubmit.co/zicoprmd@gmail.com"
          enctype="multipart/form-data"
          className="forms-wrapper">
          <input type="email" name="email" placeholder="Email" required />
          <button onClick={greeting}>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
