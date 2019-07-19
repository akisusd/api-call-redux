import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Modal} from './modal'
import PropTypes from 'prop-types'

class ModalContainer extends PureComponent {
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

    render() {

        return (
            <div>
                <Modal hideModal={this.props.hideModal} show={this.props.show} product={this.props.product}/>
            </div>
        )
    }
}
ModalContainer.propTypes = {
    hideModal: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    product: PropTypes.object,
}

export default connect('')(ModalContainer);
