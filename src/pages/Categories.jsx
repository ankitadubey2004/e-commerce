import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader.jsx";

const categoryImages = {
  electronics: "/images/img10.jpg",
  jewelery: "/images/img11.jpg",
  "men's clothing": "/images/img12.jpg",
  "women's clothing": "/images/img13.jpg",
};

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Shop by Category</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/categories/${category}`}
            className="border p-4 rounded-lg text-center hover:shadow-lg font-semibold capitalize flex flex-col items-center gap-3"
          >
            {/* Bigger Category-specific image */}
            <img
              src={categoryImages[category]}
              alt={category}
              className="w-full h-48 sm:h-52 md:h-56 object-cover rounded-md"
            />
            <span className="text-lg">{category}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
