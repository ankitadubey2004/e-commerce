import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import { FiTruck, FiCreditCard, FiClock } from 'react-icons/fi';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All Products');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (err) {
        setError('Failed to fetch products. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div className="text-center text-red-500 text-2xl mt-10">{error}</div>;

  return (
    <div className="space-y-16">
      {/* ===== HERO SECTION ===== */}
      <section className="container mx-auto grid md:grid-cols-2 items-center gap-8 py-12">
        <div className="text-left">
          <p className="text-[#8F8578] font-semibold">The Best Online Furniture Store</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 my-4">
            Explore Our Modern Furniture Collection
          </h1>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non magna vel nisi fringilla eleifend.
          </p>
          <button className="bg-[#8F8578] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#7a746b] transition-colors">
            Shop Now
          </button>
        </div>
        <div>
          {/* Image Carousel */}
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <img
              src="/images/img2.png"
              alt="Carousel Image"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="border p-6 rounded-lg">
          <FiTruck className="text-4xl text-[#8F8578] mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Free Shipping</h3>
          <p className="text-gray-500">Free shipping for orders above $199</p>
        </div>
        <div className="border p-6 rounded-lg">
          <FiCreditCard className="text-4xl text-[#8F8578] mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Flexible Payment</h3>
          <p className="text-gray-500">Multiple secure payment options</p>
        </div>
        <div className="border p-6 rounded-lg">
          <FiClock className="text-4xl text-[#8F8578] mx-auto mb-4" />
          <h3 className="text-xl font-semibold">24/7 Support</h3>
          <p className="text-gray-500">Our support is there all days</p>
        </div>
      </section>

      {/* ===== OUR PRODUCTS COLLECTION ===== */}
      <section className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Our Products Collections</h2>
        <p className="text-gray-500 text-center mb-8">Discover the best products for your home.</p>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          {['All Products', 'Latest Products', 'Best Sellers', 'Featured'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`py-2 px-6 rounded-lg font-medium transition-colors ${activeFilter === filter
                  ? 'bg-[#8F8578] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
