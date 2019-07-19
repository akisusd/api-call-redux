import React from 'react'
import { shallow } from 'enzyme'
import Product from './product'

const setup = (props) => {
  const component = shallow(
    <Product {...props} />
  )

  return {
    component: component
  }
}

describe('Product component', () => {
  it('should render a Link element', () => {
    const { component } = setup({product:{ title: 'Test Product', price: 9.99 }})
    expect(component.text()).toBe('Test Product9.99Sold OutEditDelete')
  })
})
