import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiPhone, FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import { GiShoppingBag } from 'react-icons/gi'; // Fashion-style logo

const Navbar = () => {
  const activeLinkStyle = {
    color: '#8F8578',
    fontWeight: '600',
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      {/* TOP BAR */}
      <div className="bg-[#8F8578] text-white px-4 py-2">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <FiPhone />
            <span>Call us: +123-456-7890</span>
          </div>
          <div className="flex items-center gap-4">
            <p>
              Sign up and GET 20% OFF for your first order.{' '}
              <span className="font-semibold underline cursor-pointer">Sign up Now</span>
            </p>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className="bg-white">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <GiShoppingBag className="text-3xl" style={{ color: '#8F8578' }} />
            <span className="text-2xl font-bold text-gray-800">Glamora</span>
          </NavLink>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-8 font-medium text-gray-600">
            <li>
              <NavLink to="/" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>Shop</NavLink>
            </li>
            <li>
              <NavLink to="/categories" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>Categories</NavLink>
            </li>
            <li>
              <NavLink to="/about" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>About Us</NavLink>
            </li>
          </ul>

          {/* Right Icons */}
          <div className="flex items-center gap-6 text-xl text-gray-700">
            <FiSearch className="cursor-pointer transition-colors" style={{ color: '#8F8578' }} />
            <NavLink to="/cart">
              <FiShoppingCart className="cursor-pointer transition-colors" style={{ color: '#8F8578' }} />
            </NavLink>
            <NavLink to="/profile">
              <FiUser className="cursor-pointer transition-colors" style={{ color: '#8F8578' }} />
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
