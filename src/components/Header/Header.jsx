import React, { useRef, useState } from "react";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

const navLinks = [
  { display: "Home", path: "/home" },
  { display: "PC Parts", path: "/pcparts" },
  { display: "Cart", path: "/cart" },
  { display: "Contact", path: "/contact" },
  { display: "PC Builder", path: "/pcbuilder" },
];

const Header = () => {
  const menuRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCart = () => dispatch(cartUiActions.toggle());

  return (
    <header className="bg-white shadow-md">
      <Container className="flex justify-between items-center py-4">
        <NavLink to="/home" className="flex items-center">
          <img src={logo} alt="logo" className="w-16 h-16 mr-2" />
          <span className="text-xl font-bold text-gray-800">HardwareFolio</span>
        </NavLink>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex flex-grow justify-center">
          {navLinks.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition duration-300 mx-4"
            >
              {item.display}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="hidden lg:flex items-center gap-6">
          <span className="relative cursor-pointer" onClick={toggleCart}>
            <i className="ri-shopping-basket-line text-lg text-gray-800"></i>
            {totalQuantity > 0 && (
              <span className="absolute top-0 right-0 bg-blue-600 text-white w-6 h-6 flex items-center justify-center text-xs font-semibold rounded-full">
                {totalQuantity}
              </span>
            )}
          </span>
          <Link to="/login" className="text-lg text-gray-800">
            <i className="ri-user-line text-lg text-gray-800"></i>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="block lg:hidden">
          <span className="cursor-pointer" onClick={toggleMenu}>
            <i className="ri-menu-line text-lg text-gray-800"></i>
          </span>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black text-white bg-opacity-40 z-50 ${isMobileMenuOpen ? 'block' : 'hidden'}`} ref={menuRef}>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <span className="absolute top-4 right-4 cursor-pointer" onClick={toggleMenu}>
            <i className="ri-close-line text-5xl "></i>
          </span>
          <img src={logo} alt="logo" className="w-16 h-16 mb-8" />
          {navLinks.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="text-2xl text-white hover:text-blue-600 mb-4"
              onClick={toggleMenu}
            >
              {item.display}
            </NavLink>
          ))}
          <div className="flex gap-4 mt-4">
            <span className="text-white">
              <Link to="/login">
                <i className="ri-user-line text-lg text-white"></i>
              </Link>
            </span>
            <span className="relative text-white cursor-pointer" onClick={toggleCart}>
              <i className="ri-shopping-basket-line text-lg text-white"></i>
              {totalQuantity > 0 && (
                <span className="absolute top-0 right-0 bg-blue-600 text-white w-6 h-6 flex items-center justify-center text-xs font-semibold rounded-full">
                  {totalQuantity}
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
