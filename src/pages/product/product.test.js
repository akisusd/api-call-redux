import React from 'react'
import { shallow } from 'enzyme'
import Product from './product'
import ProductForm from '../../components/form/index'

const setup = () => {
  const component = shallow(
    <Product/>
  )

  return {
    component: component
  }
}

describe('Product page', () => {
  it('should render product page', () => {
    const { component } = setup()
    expect(component.contains('ProductForm'))
  })
})
