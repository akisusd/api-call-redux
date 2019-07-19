import React from 'react'
import IndividualProduct from '../../components/individualProduct/individualProduct'
import PropTypes from 'prop-types'

const ViewProduct = (product) => {
    return (
        <div className="container">
            <IndividualProduct product={product}/>
        </div>
    )
}

ViewProduct.propTypes = {
    product: PropTypes.object
}

export default ViewProduct