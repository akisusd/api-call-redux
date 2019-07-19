import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className="col-sm-3">
    <Product
      id={product.id}
      url={product.url}
      brand={product.brand}
      title={product.title}
      price={product.price}
      quantity={product.inventory} />
    <button
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'}>
      {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
    </button>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number,
    inventory: PropTypes.number.isRequired,
    url: PropTypes.string,
    brand: PropTypes.string
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
