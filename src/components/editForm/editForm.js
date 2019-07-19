import React from 'react';
import PropTypes from 'prop-types'

export const EditForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="form-group">
                <label>Title: </label>
                <br/>
                <input className="form-control" type="text" name="title" onChange={props.onChange} value={props.product.title}/>
            </div>
            <div className="form-group">
                <label>Brand: </label>
                <br/>
                <input className="form-control" type="text" name="brand" onChange={props.onChange} value={props.product.brand}/>
            </div>
            <div className="form-group">
                <label>Price: </label>
                <br/>
                <input className="form-control" type="number" name="price" onChange={props.onChange} value={props.product.price}/>
            </div>
            <div className="form-group">
                <label>Inventory: </label>
                <br/>
                <input className="form-control" type="number" name="inventory" onChange={props.onChange} value={props.product.inventory}/>
            </div>
            <div className="form-group">
                <label>Image: </label>
                <br/>
                <input className="form-control" type="number" name="url" onChange={props.onChange} value={props.product.url}/>
            </div>
            <button type="submit">Edit</button>
            <button type="button" onClick={props.close}>Close</button>
        </form>
    )
}

EditForm.propTypes = {
    handleSubmit: PropTypes.func,
    onChange: PropTypes.func,
    product: PropTypes.object
}