import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader.jsx';
import { useCart } from '../context/CartContext.jsx'; 
import { FaStar } from 'react-icons/fa';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <Loader />;
  if (!product) return <div>Product not found.</div>;

  return (
    <div className="container mx-auto grid md:grid-cols-2 gap-12 items-start py-12">
      {/* Left Column: Image */}
      <div className="bg-gray-100 p-8 rounded-lg">
        <img
          src={product.image || "/placeholder.png"}
          alt={product.title}
          className="w-full h-auto max-h-[500px] object-contain"
        />
      </div>

      {/* Right Column: Details */}
      <div className="space-y-4">
        <span className="bg-[#8F8578]/20 text-[#8F8578] text-sm font-semibold px-3 py-1 rounded-full">
          {product.category}
        </span>
        <h1 className="text-4xl font-bold">{product.title}</h1>
        <div className="flex items-center gap-2">
          <FaStar className="text-yellow-400" />
          <span className="font-semibold">{product.rating.rate}</span>
          <span className="text-gray-500">({product.rating.count} reviews)</span>
        </div>
        <p className="text-gray-600 text-lg">{product.description}</p>
        <p className="text-4xl font-extrabold text-[#8F8578]">${product.price.toFixed(2)}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-[#8F8578] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#7a746b] transition-colors w-full md:w-auto"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
