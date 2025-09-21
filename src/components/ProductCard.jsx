import React from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiEye } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const { id, title, price, category, image, rating } = product;

  return (
    <Link
      to={`/product/${id}`}
      className="group bg-white p-3 rounded-lg text-gray-700 hover:bg-[#8F8578] hover:text-white transition-colors"
    >
      {/* Image Container */}
      <div className="relative w-full h-64 bg-gray-200">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain object-center"
        />

        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white p-3 rounded-full text-gray-700 hover:bg-[#8F8578] hover:text-white transition-colors">
            <FiHeart />
          </button>
          <button className="bg-white p-3 rounded-full text-gray-700 hover:bg-[#8F8578] hover:text-white transition-colors">
            <FiEye />
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{category}</p>
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold text-[#8F8578]">${price.toFixed(2)}</p>
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            <span className="text-sm text-gray-600 font-medium">{rating.rate}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
