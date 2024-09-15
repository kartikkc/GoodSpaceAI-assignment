import React from 'react';
import './scss/footer.scss';
import { call, expenseBook, instagram, linkedin, pin, yt } from '../assets';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-border">
        <div className="footer-logo">
          <div className="logo">
            <img src={expenseBook} alt="ExpenseBook logo" />
          </div>
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <img src={pin} alt='' className=""></img> Address
          </div>
          <div className="contact-item">
            <img src={call} alt='call'></img> <p>+91 1234567890</p>
          </div>
          <div className="social-media">
            <h1>Social Media</h1>
            <a href="/" className='footer-icon'><img src={instagram} alt='' ></img></a>
            <a href="/" className='footer-icon'><img src={yt} alt='' ></img></a>
            <a href="/" className='footer-icon'><img src={linkedin} alt='' ></img></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <a href="/">Blogs</a>
          <a href="/">Features</a>
          <a href="/">Pricing</a>
          <a href="/">Integrations</a>
        </div>

        <div className="copyright">
          Copyright &copy; 2024 • ExpenseBook
        </div>
      </div>
    </footer>
  );
};

export default Footer;
