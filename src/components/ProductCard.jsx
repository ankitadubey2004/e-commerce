import React from "react";
import { Link } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { id, title, price, category, image, rating } = product;

  return (
    <div className="group bg-white p-3 rounded-lg text-gray-700 shadow hover:shadow-lg transition">
      {/* Image */}
      <div className="relative w-full h-64 bg-gray-200 rounded-md overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain object-center"
        />

        {/* Hover actions */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Quick view */}
          <Link
            to={`/product/${id}`}
            className="bg-white p-3 rounded-full text-gray-700 hover:bg-[#8F8578] hover:text-white transition-colors"
          >
            <FiEye />
          </Link>
        </div>
      </div>

      {/* Details */}
      <div className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="text-lg font-semibold text-gray-800 truncate group-hover:text-white">
            {title}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 mb-2 capitalize">{category}</p>
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold text-[#8F8578]">${price.toFixed(2)}</p>
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            <span className="text-sm text-gray-600 font-medium">{rating?.rate || 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
