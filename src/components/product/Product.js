import React from 'react'
import PropTypes from 'prop-types'

import { Link } from "react-router-dom";

const Product = ({ price, quantity, title, url, brand, id }) => (
  <Link to={'viewproduct?id='+id}>
    <div className="image-container">
      <img className="img-fluid h-100" src={url ? url : "https://thewindowsclub-thewindowsclubco.netdna-ssl.com/wp-content/uploads/2018/06/Broken-image-icon-in-Chrome.gif"} alt={title}/>
    </div>
    <div className='text-dark'>
      {title}
    </div>
    <div className='text-dark'>
      {brand}
    </div>
    <div className='text-success'>
      &#36;{price}
    </div>
    <div className='text-dark'>
      <b>{quantity ? ` x ${quantity}` : null}</b>
    </div>
  </Link>
)

Product.propTypes = {
  price: PropTypes.number,
  id: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  url:  PropTypes.string,
  brand: PropTypes.string
}

export default Product
