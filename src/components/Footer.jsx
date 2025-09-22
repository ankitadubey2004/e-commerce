import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-12">
      <div className="container mx-auto grid md:grid-cols-4 gap-8 px-4 pb-8">
        {/* About / Logo */}
        <div>
          <h2 className="text-2xl font-bold text-[#8F8578] mb-4">Glamora</h2>
          <p className="text-gray-600">
            Explore modern furniture and fashion accessories with Glamora. Quality products and best online experience guaranteed.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-[#8F8578] transition-colors">Home</Link></li>
            <li><Link to="/shop" className="hover:text-[#8F8578] transition-colors">Shop</Link></li>
            <li><Link to="/categories" className="hover:text-[#8F8578] transition-colors">Categories</Link></li>
            <li><Link to="/about" className="hover:text-[#8F8578] transition-colors">About Us</Link></li>
            <li><Link to="/cart" className="hover:text-[#8F8578] transition-colors">Cart</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2"><FiPhone /> +123-456-7890</li>
            <li className="flex items-center gap-2"><FiMail /> support@glamora.com</li>
            <li className="flex items-center gap-2"><FiMapPin /> 123 Fashion St, NY, USA</li>
          </ul>
        </div>

        {/* Newsletter / Social */}
        <div>
          <h3 className="font-semibold mb-4">Follow & Subscribe</h3>
          <div className="flex items-center gap-4 mb-4">
            <a href="#" className="text-gray-700 hover:text-[#8F8578]"><FiFacebook /></a>
            <a href="#" className="text-gray-700 hover:text-[#8F8578]"><FiInstagram /></a>
            <a href="#" className="text-gray-700 hover:text-[#8F8578]"><FiTwitter /></a>
          </div>
          <p className="text-gray-600 mb-2">Subscribe to our newsletter:</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded-l-lg border border-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#8F8578] text-white font-semibold px-4 rounded-r-lg hover:bg-[#7a746b] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-[#8F8578] text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} Glamora. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
