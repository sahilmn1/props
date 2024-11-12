// src/components/ProductDetail.js
import React from "react";
import { useParams, useLocation } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams(); // Gets the productId from the URL
  const location = useLocation(); // Accesses the location object to retrieve passed state
  const product = location.state?.product; // Extracts the product data passed from the link

  // Display a message if product data is missing
  if (!product) {
    return <p className="text-danger">Product not found.</p>;
  }

  // Render product details
  return (
    <div className="container my-4">
      <div className="card shadow-lg p-3 mb-5 bg-white rounded">
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            {/* Product image */}
            <img
              src={product.imageUrl}
              alt={product.name}
              className="img-fluid rounded"
              style={{ maxWidth: "250px" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              {/* Product title */}
              <h2 className="card-title">{product.name} Details</h2>
              {/* Product details */}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Product ID:</strong> {productId}
                </li>
                <li className="list-group-item">
                  <strong>Product Name:</strong> {product.name}
                </li>
                <li className="list-group-item">
                  <strong>Product Price:</strong> {product.price}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
