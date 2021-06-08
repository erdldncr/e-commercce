import React from 'react'
import Rating from './Rating'

export default function Product({_id,image,name,price,rating,numReviews}) {
    return (
        <div key={_id} className="card">
        <a href={`/product/${_id}`}>
          {/* <!-- img-size should be 680px by 830px --> */}
          <img className="medium" src={image} alt="" />
        </a>
        <div className="card-body">
        <a href={`/product/${_id}`}>
            <h2>{name}</h2>
          </a>
            <Rating rating={rating} numReviews={numReviews} />
          <div className="price">${price}</div>
        </div>
      </div>
    )
}
