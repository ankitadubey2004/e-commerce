
# 🛒 E-Shop – Responsive E-Commerce Product Listing Page

> A **responsive e-commerce web application** where users can browse products, view details, and manage their shopping cart — with live cart updates, product details, and persistent storage.

Built with **React + TailwindCSS / Material UI**, deployed on **Netlify (frontend)**.  

---

## ✨ Features  

- 🔐 **Cart Persistence** – Cart data stored in localStorage, preserving items across refreshes.
- 🛍 **Product Grid** – Responsive product cards showing image, name, price, category, and “Add to Cart.”  
- 📄 **Product Details Page** – MFull product description, rating, and “Add to Cart” button.  
- 🛒 **Cart Management** – Quantity selection, subtotal calculation, and remove option.  
- 📱 **Responsive UI** – Works on mobile, tablet, and desktop with a sticky navbar.  
- 📜 **Version Control** – Auto-save + ability to restore past versions.  

---

## 🏗️ Tech Stack  

### **Frontend (React + Vite)**  
- ⚛️ React (with Vite)  
- 🎨 TailwindCSS / Material UI for styling
- 🔗 Axios (API calls)  
- 🌍 Deployed on **Netlify**  

### **Backend (Node + Express)**  
- 🗄️ Fake Store API – Provides product data 
- 🔐 No authentication needed (public API) 
- 📦 Handles product listings, details, categories 

---

## 📂 Project Structure  

```

e-commerce/
│── src/
│   ├── assets/       # Images, icons, and other static files
│   ├── components/   # Navbar, ProductCard, CartItem, etc.
│   ├── pages/        # Home, ProductDetails, Cart, About
│   ├── hooks/        # Custom hooks (optional)
│   ├── context/      # Cart state (optional)
│   └── utils/        # Helpers (API calls, localStorage)
│
└── package.json      # Dependencies

````

---

## 🚀 Getting Started  

### 1️⃣ Clone the repository  
```bash
git clone https://github.com/sebastian-sultz/Docs-Clone.git
cd e-commerce
````

---

### 2️⃣ Install dependencies

```bash
npm install
```

3️⃣ Run the app

```bash
npm run dev
```

Frontend runs at → [http://localhost:5173](http://localhost:5173)

---

## 🌐 Deployment

### Frontend → Netlify

* Framework: **Vite + React**
* Build Command: npm run build
* Publish the build folder

---

## 🧑‍🤝‍🧑 Contributing

Contributions are welcome 🎉

1. Fork the repo
2. Create a new branch (`feature/amazing-feature`)
3. Commit your changes
4. Open a Pull Request 🚀

---

## 📜 License

This project is licensed under the **MIT License** – free to use!

---

### 🎉 Pro Tip

If you like this project, **leave a star ⭐ on GitHub** — it helps the project grow!

