import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { getVisibleProducts } from '../../reducers/products'
import ViewProduct from './viewProduct'
import PropTypes from 'prop-types'

class ViewProductContainer extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            product: {
                title: '',
                brand: '',
                price: 0,
                inventory: 0,
                url: ''
            },
            id: 0
        }
    }

    findProductById = () => {
        const product = this.props.products.find(product => product.id === parseInt(this.state.id , 10 ));
        this.setState({
            product: product
        });
    }

    componentDidMount () {
        this.setState({id: this.props.location.search.split('id=')[1]});
        this.findProductById(this.state.id);
    }

    componentDidUpdate () {
        this.findProductById(this.state.id);
    }

    render () {
        return(
            <div>
            <ViewProduct product={this.state.product}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: getVisibleProducts(state.products)
})

ViewProductContainer.propTypes = {
    products: PropTypes.array,
    location: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(ViewProductContainer);
