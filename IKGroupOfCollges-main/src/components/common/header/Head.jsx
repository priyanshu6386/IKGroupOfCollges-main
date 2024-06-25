import React from "react";
import LogoCollege from "./LogoCollege.jpg";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <img src={LogoCollege} alt="collegeLogo" />
            <div className="text-container">
              <h1>Pratibha Shiksha Niketan Inter College</h1>
              <span>Naraini, Dewa, 225301</span>
            </div>
          </div>

          <div className="social">
            <a
              href="https://www.facebook.com/p/Pratibha-Shiksha-Niketan-Inter-College-Naraini-Dewa-Barabanki-100092111354390/"
              target="_blank"
            >
              <i className="fab fa-facebook-f icon"></i>
            </a>
            <a
              href="https://www.instagram.com/psnicnaraini/?igsh=MW0wZXAycDBjdDA1eg%3D%3D&utm_source=qr"
              target="_blank"
            >
              <i className="fab fa-instagram icon"></i>
            </a>

            <a href="https://x.com/?lang=en&mx=2" target="_blank">
              <i className="fab fa-twitter icon"></i>
            </a>
            <a
              href="https://www.youtube.com/watch?v=rynEZqzZpSI"
              target="_blank"
            >
              <i className="fab fa-youtube icon"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
