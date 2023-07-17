import React from 'react';
import logo from "../../../assets/logo/rent.png"
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
<footer>
<footer className="footer p-10 bg-base-200 text-base-content">
<div>
<Link to="/" className='relative w-96'>
<img src={logo} alt="Logo" />
<span className='absolute -bottom-1 brand-title  text-secondary'>House Hunter</span>
        </Link>
        <p>Providing reliable house rental services since 2023</p>        
</div>
  <div>
    <span className="footer-title">Services</span> 
    <Link to="/" className="link link-hover">Property</Link> 
    <Link to="/" className="link link-hover">Booking</Link> 
    <Link to="/" className="link link-hover">Marketing</Link> 
    <Link to="/" className="link link-hover">Advertisement</Link>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <Link to="/" className="link link-hover">About us</Link> 
    <Link to="/" className="link link-hover">Contact</Link> 
    <Link to="/" className="link link-hover">Property Listings</Link> 
    <Link to="/" className="link link-hover">Owner Listing</Link>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <Link to="/" className="link link-hover">Terms of use</Link> 
    <Link to="/" className="link link-hover">Privacy policy</Link> 
    <Link to="/" className="link link-hover">Cookie policy</Link>
  </div>
  <div>
    <span className="footer-title">Newsletter</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div>
</footer>
<footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <div>
    <p>Copyright © 2023 - All right reserved by House Hunter</p>
  </div>
</footer>
</footer>
    );
};

export default Footer;