import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { addProduct } from '../../actions/index'
import {Form} from './form'
import PropTypes from 'prop-types'

class ProductForm extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            product: {
                title: '',
                brand: '',
                inventory: 0,
                price: 0,
                url: ''
            }
        }
    }

    onChange = (event) => {
        const {name, value} = event.target;
        this.setState((state) => ({
            ...state,
            product: {
                ...state.product,
                [name]: value
            }
        }))
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addProduct(this.state.product);
    }

    render() {
        return (
            <div>
                <Form product={this.state.product} onChange={this.onChange} handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: product => dispatch(addProduct(product))
    };
}

ProductForm.propTypes = {
    addProduct: PropTypes.func.isRequired
}

export default connect('',mapDispatchToProps)(ProductForm);
