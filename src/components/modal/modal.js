import React from 'react';
import EditProductForm from '../editForm/index'
import PropTypes from 'prop-types'

export const Modal = (props) => {

    return (
        <div className={props.show ? 'modal d-block' : 'modal'} role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <h3>Editing product:</h3>
                        <EditProductForm close={props.hideModal} product={props.product}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    show: PropTypes.bool,
    hideModal: PropTypes.func,
    product: PropTypes.object
}