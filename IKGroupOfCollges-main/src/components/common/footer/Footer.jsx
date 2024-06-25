import React from "react";
import { blog } from "../../../dummydata";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <div className="text-container">
              <h1>ACADEMIA</h1>
              <span>ONLINE EDUCATION & LEARNING</span>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
           
            <div className="social-icons">
              <a
                href="https://www.facebook.com/p/Pratibha-Shiksha-Niketan-Inter-College-Naraini-Dewa-Barabanki-100092111354390/"
                target="_blank"
              >
                <i className="fab fa-facebook-f icon"></i>
              </a>
              <a href="https://x.com" target="_blank">
                <i className="fab fa-twitter icon"></i>
              </a>

              <a
                href="https://www.instagram.com/psnicnaraini/?igsh=MW0wZXAycDBjdDA1eg%3D%3D&utm_source=qr"
                target="_blank"
              >
                <i className="fab fa-instagram icon"></i>
              </a>
            </div>
          </div>
          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className="box">
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className="items flexSB">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <span>
                    <i className="fa fa-calendar-alt"></i>
                    <label htmlFor="">{val.date}</label>
                  </span>
                  <span>
                    <i className="fa fa-user"></i>
                    <label htmlFor="">{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="box last">
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
                Naraini, Dewa, 225301
              </li>
              <li> 
                <i className="fa fa-phone-alt"></i>
                +919415770331
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                pratibhasnhs@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>
          Copyright ©2022 All rights reserved | This template is made with{" "}
          <i className="fa fa-heart"></i> by GorkhCoder
        </p>
      </div>
    </>
  );
};

export default Footer;
