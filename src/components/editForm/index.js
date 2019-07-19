import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { editProduct} from '../../actions/index'
import {EditForm} from './editForm'
import PropTypes from 'prop-types'

class EditProductForm extends PureComponent {

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
        this.props.editProduct(this.state.product);
        this.props.close();
    }

    componentDidUpdate() {
        if (this.props.product.product && !this.state.product.title) {
            this.setState({product: this.props.product.product})
        }
    }

    render() {
        return (
            <div>
                <EditForm product={this.state.product} onChange={this.onChange} handleSubmit={this.handleSubmit} close={this.props.close}/>
            </div>
        )
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        editProduct: product => dispatch(editProduct(product))
    };
}

EditProductForm.propTypes = {
    close: PropTypes.func.isRequired,
    editProduct: PropTypes.func.isRequired,
    product:  PropTypes.object
}

export default connect('',mapDispatchToProps)(EditProductForm);
