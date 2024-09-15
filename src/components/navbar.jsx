import React from 'react';
import { useState } from 'react';
import { expenseBook } from '../assets'
import "./scss/navbar.scss";

const Navbar = () => {
  const [openNavigation, setNavigation] = useState(false);
  return (
    <div className="navbar-outer">
      <nav className="navbar">
        <div className="logo">
          <img src={expenseBook} alt="ExpenseBook logo" />
        </div>

        <div className="nav-links">
          <a href="/">Blogs</a>
          <a href="/">Features</a>
          <a href="/">Pricing</a>
          <a href="/">Integrations</a>
          <button className="trial-button">Start trial</button>
        </div>
        <div onClick={() => { setNavigation(true) }} className='open'><img src="/menu.png" alt="" className='open-menu' /></div>
        <div onClick={() => setNavigation(false)} className={`menu-overlay ${!openNavigation ? "translate-hide" : "translate-show"}`}>
          <div className={`menu-content ${!openNavigation ? "translate-hide" : "translate-show"}`}>
            <img onClick={() => { setNavigation(false) }} src={"/close.png"} height={100} width={1000} alt='' className='close-icon' />
            <div className="menu-links">
              <a href="/">Blogs</a>
              <a href="/">Features</a>
              <a href="/">Pricing</a>
              <a href="/">Integrations</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;