import React from 'react';

const Newsletter = () => {
  const form = document.forms['zema-form'];

  const greeting = () => {
    // form.addEventListener('submit', (e) => {
    //   e.preventDefault();
    // });
    alert('Email Submitted!');
    form.reset();
  };

  return (
    <section>
      <div id="newsletter">
        <div className="title-wrapper">
          <h2 className="title-news">NEWSLETTER</h2>
        </div>
        <form
          name="zema-form"
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
