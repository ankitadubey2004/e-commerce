import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader.jsx";

const About = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products?limit=8");
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="space-y-32">

      {/* ===== Hero Section ===== */}
      <section>
        <div className="container mx-auto py-20 px-4 md:flex md:items-center md:justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl font-extrabold text-gray-800">
              About Our Store
            </h1>
            <p className="text-gray-600">
              Welcome to our furniture store! We provide modern, high-quality products to make your home beautiful and comfortable.
            </p>
            <p className="text-gray-600">
              Our mission is to combine style and functionality, delivering products that suit your lifestyle.
            </p>
            <button className="bg-[#8F8578] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#7a746b] transition-colors">
              Explore Products
            </button>
          </div>
          <div className="md:w-1/2 relative">
            <img
              src="/images/img4.jpg"
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ===== Features Section ===== */}
      {/* ===== Features Section ===== */}
{/* ===== Features Section ===== */}
<section className="container mx-auto px-4 space-y-8">
  <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
    Why Choose Us
  </h2>
  <div className="grid md:grid-cols-3 gap-8 text-center">
    {[
      { 
        img: "/images/img6.jpg", 
        title: "Quality Products", 
        desc: "High-quality furniture made with durable materials and modern design. Each product is carefully inspected to ensure long-lasting performance, comfort, and elegance for your home." 
      },
      { 
        img: "/images/img5.jpg", 
        title: "Customer Service", 
        desc: "Our friendly support team is always ready to help you with any questions or concerns. From product inquiries to after-sales support, we ensure a smooth shopping experience." 
      },
      { 
        img: "/images/img7.jpg", 
        title: "Fast Delivery", 
        desc: "Quick and reliable shipping ensures your furniture reaches your doorstep safely and on time. We partner with trusted couriers and provide tracking for every order." 
      },
    ].map((feature, i) => (
      <div key={i} className="p-6 border rounded-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300">
        <img src={feature.img} alt={feature.title} className="w-20 h-20 mx-auto mb-4 rounded-full object-cover" />
        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
        <p className="text-gray-500 text-sm">{feature.desc}</p>
      </div>
    ))}
  </div>
</section>

      {/* ===== Mini Product Gallery from API ===== */}
      <section className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Our Products</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain p-4"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold truncate">{product.title}</h3>
                <p className="text-[#8F8578] font-bold mt-2">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;
