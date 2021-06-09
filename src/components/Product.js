import React from 'react'
import Rating from './Rating'
import {Link} from 'react-router-dom'
export default function Product({_id,image,name,price,rating,numReviews}) {
    return (
        <div key={_id} className="card">
        <Link to={`/product/${_id}`}>
          {/* <!-- img-size should be 680px by 830px --> */}
          <img className="medium" src={image} alt="" />
        </Link>
        <div className="card-body">
        <Link href={`/product/${_id}`}>
            <h2>{name}</h2>
          </Link>
            <Rating rating={rating} numReviews={numReviews} />
          <div className="price">${price}</div>
        </div>
      </div>
    )
}
