import React from "react";
import { useParams } from "react-router-dom";
import Rating from "../components/Rating";
import data from "../data";

export default function ProductScreen() {
  const { id } = useParams();
  const product = data.products.find((product) => product._id === id);

  const {
    image,
    name,
    _id,
    rating,
    numReviews,
    price,
    description,
    countInStock,
  } = product;
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={image} alt={name} />
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{name}</h1>
            </li>
            <li>
              <Rating rating={rating} numReviews={numReviews} />
            </li>
            <li>Price: ${price}</li>
            <li>
              Description:
              <p>{description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">${price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {countInStock > 0 ? (
                      <span className="success">In Stock </span>
                    ) : (
                      <span className="error">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                  <button className="primary block">
                      Addd to Cart
                  </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
