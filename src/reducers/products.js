import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, ADD_TO_CART, ADD_PRODUCTS, DELETE_PRODUCT, EDIT_PRODUCT } from '../constants/ActionTypes'

const products = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        inventory: state.inventory - 1
      }
    default:
      return state
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {})
      }
    case ADD_PRODUCTS:
      const { id } = action.product
        return {
          ...state,
          [id]: action.product
        }
    case DELETE_PRODUCT:
      const { [action.productid]: value, ...newProducts } = state;
      return newProducts
    case EDIT_PRODUCT:
      const editid = action.product.id
      return {
        ...state,
        [editid]: action.product
      }
    default:
      const { productId } = action
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action)
        }
      }
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map(product => product.id)
    case ADD_PRODUCTS:
      const { id } = action.product
      return [...state, id]
    case DELETE_PRODUCT:
      return state.filter((visibleId) => {
        return parseInt(visibleId, 10) !== action.productid
      });
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export const getProduct = (state, id) =>
  state.byId[id]

export const getVisibleProducts = state =>
  state.visibleIds.map(id => getProduct(state, id))
