import React from 'react'
import PropTypes from 'prop-types'
import {PureComponent} from 'react'
import {connect} from 'react-redux'
import { deleteProduct, addToCart} from '../../actions/index'
import ModalContainer from '../modal'
import Product from './product'

class IndividualProduct extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    edit() {
       this.showModal();
    }

    delete = id => {
        this.props.deleteProduct(id);
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    onAddToCartClicked = () => {
        this.props.addToCart(this.props.product.product.id);
    }

    render() {
        return(
            <div>
                {this.props.product.product ?
                    <Product product={this.props.product.product} edit={this.edit} showModal={this.showModal} delete={this.delete} onAddToCartClicked={this.onAddToCartClicked}/>
                : <h1>product is deleted or newer existed</h1>
                }
                <ModalContainer hideModal={this.hideModal} show={this.state.show} product={this.props.product}/>
            </div>
        )
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        deleteProduct: productId => dispatch(deleteProduct(productId)),
        addToCart: productId => dispatch(addToCart(productId))
    };
}

IndividualProduct.propTypes = {
    product: PropTypes.object,
    deleteProduct: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired
}

export default connect('',mapDispatchToProps)(IndividualProduct);
