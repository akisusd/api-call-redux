import React from 'react';
import PropTypes from 'prop-types'

const Product = (props) => {
    return (
        <div>
            <div className="image-container">
                <img className="img-fluid h-100" src={props.product.url} alt={props.product.title} />
            </div>
            <h3 className='text-dark'>{props.product.title}</h3>
            <div className='text-dark'>{props.product.brand}</div>
            <div className='text-success'>{props.product.price}</div>
            <div className='text-dark'>{props.product.inventory}</div>
            <button
                onClick={props.onAddToCartClicked}
                disabled={props.product.inventory > 0 ? '' : 'disabled'}>
                {props.product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
            </button>
            <button
                type="button"
                onClick={()=>props.edit(props.product.id)}>
                Edit
            </button>
            <button
                type="button"
                onClick={()=>props.delete(props.product.id)}>
                Delete
            </button>
        </div>
    )
}

Product.propTypes = {
    product: PropTypes.object,
    onAddToCartClicked: PropTypes.func,
    edit: PropTypes.func,
    delete: PropTypes.func
}

export default Product