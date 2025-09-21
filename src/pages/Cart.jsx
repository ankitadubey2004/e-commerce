import React from 'react';
import { useCart } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';

const Cart = () => {
  // Get all necessary data and functions from the cart context
  const { cartItems, removeFromCart, cartTotal, increaseQuantity, decreaseQuantity } = useCart();

  // 1. Handle the case where the cart is empty
  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition-colors">
          Continue Shopping
        </Link>
      </div>
    );
  }

  // 2. Display the cart items if the cart is not empty
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>
      <div className="space-y-4">
        {cartItems.map(item => (
          <div key={item.id} className="flex flex-col md:flex-row items-center justify-between border p-4 rounded-lg gap-4">
            {/* Item Details */}
            <div className="flex items-center gap-4 w-full md:w-1/2">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
              <div>
                <h2 className="font-semibold text-lg">{item.title}</h2>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
            </div>
            
            {/* Quantity Controls and Price */}
            <div className="flex items-center justify-between w-full md:w-auto md:gap-8">
              <div className="flex items-center border rounded">
                <button onClick={() => decreaseQuantity(item.id)} className="px-3 py-1 font-bold hover:bg-gray-100">-</button>
                <span className="px-4">{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)} className="px-3 py-1 font-bold hover:bg-gray-100">+</button>
              </div>
              <p className="font-bold text-lg w-24 text-right">${(item.price * item.quantity).toFixed(2)}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-8 flex flex-col items-end">
        <div className="w-full md:w-1/3 p-6 bg-gray-50 rounded-lg">
           <div className="flex justify-between text-lg font-semibold">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
           </div>
           <p className="text-gray-500 text-sm mt-2">Shipping and taxes calculated at checkout.</p>
           <button className="bg-green-600 text-white font-bold py-3 w-full rounded-lg hover:bg-green-700 transition-colors mt-4">
              Proceed to Checkout
           </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;