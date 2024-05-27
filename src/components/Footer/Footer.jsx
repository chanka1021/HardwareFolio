import React from "react";
import logo from "../../assets/images/res-logo.png";

const Footer = () => {

  const handleClick = () => {
    window.open('https://www.achrafchouache.me', '_blank');
  };
  
  return (
    <footer className="py-6 bg-gray-100 text-sm text-gray-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="text-center lg:text-left">
            <img src={logo} alt="logo" className="w-1/3 lg:w-1/5 mb-3 mx-auto lg:mx-0" />
            <p>
              Find all your PC parts needs with HardwareFolio.
            </p>
          </div>

          <div className="mt-4 lg:mt-0">
            <h5 className="font-semibold mb-2">Hours of Operation</h5>
            <p>Monday - Friday: 09:00am - 10:00pm</p>
            <p>Saturday: 09:00am - 05:00pm</p>
          </div>

          <div className="mt-4 lg:mt-0">
            <h5 className="font-semibold mb-2">Contact Info</h5>
            <p>Casablanca, Ain Sbaa-3100, Morocco</p>
            <p>+123 123456789</p>
            <p>HardwareFolio@gmail.com</p>
          </div>

          <div className="mt-4 lg:mt-0">
            <h5 className="font-semibold mb-2">Subscribe to Our Newsletter</h5>
            <p>Stay updated on the latest deals and releases.</p>
            <div className="flex items-center mt-2">
              <input type="email" placeholder="Enter your email" className="py-2 px-3 border border-gray-300 rounded-l focus:outline-none" />
              <button className="py-2 px-4 bg-blue-600 text-white rounded-r focus:outline-none">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <p>
            Made with 🖤 by <a className="text-blue-600" onClick={handleClick}>@Chanka1021</a>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
