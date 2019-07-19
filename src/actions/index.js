import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products
})

export const getAllProducts = () => dispatch => {
  return fetch('http://localhost:3004/products')
    .then(response => response.json())
    .then(json => dispatch(receiveProducts(json)))
}

const addProducts = product => ({
  type: types.ADD_PRODUCTS,
  product
})

export const addProduct = product => dispatch => {
  return fetch('http://localhost:3004/products', {
    method: 'POST',
    body: JSON.stringify({
      title: product.title,
      brand: product.brand,
      inventory: parseInt(product.inventory , 10 ),
      price: parseInt(product.price , 10 ),
      url: product.url
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => dispatch(addProducts(json)))
}

const deleteProducts = productid => ({
  type: types.DELETE_PRODUCT,
  productid
})

const removeFromCart = productid => ({
  type: types.REMOVE_FROM_CART,
  productid
})

export const deleteProduct = productId => dispatch => {
  return fetch('http://localhost:3004/products/'+productId, {
    method: 'DELETE',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => dispatch(deleteProducts(productId)))
  .then(json => dispatch(removeFromCart(productId)))
}

const editProducts = product => ({
  type: types.EDIT_PRODUCT,
  product
})

export const editProduct = product => dispatch => {
  return fetch('http://localhost:3004/products/'+product.id, {
    method: 'PATCH',
    body: JSON.stringify({
      title: product.title,
      brand: product.brand,
      inventory: parseInt(product.inventory , 10 ),
      price: parseInt(product.price , 10 ),
      url: product.url
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => dispatch(editProducts(product)))
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  dispatch({
    type: types.CHECKOUT_SUCCESS,
    cart
  })
}
