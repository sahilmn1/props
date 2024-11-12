// src/components/HomePage.js
import React from "react";
import { Link } from "react-router-dom";

// Sample product data with image URLs from Unsplash
const products = [
  {
    id: 1,
    name: "Laptop",
    price: "$1000",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1681666713677-8bd559bef6bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Phone",
    price: "$500",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Headphones",
    price: "$100",
    imageUrl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const HomePage = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Product List</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <Link
              to={`/product/${product.id}`}
              state={{ product }}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card shadow-sm h-100">
                {/* Product image */}
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  {/* Product name and price */}
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-muted">{product.price}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
