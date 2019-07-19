import React from 'react'
import { shallow } from 'enzyme'
import Product from './Product'

const setup = props => {
  const component = shallow(
    <Product {...props} />
  )

  return {
    component: component
  }
}

describe('Product component', () => {
  it('should render a Link element', () => {
    const { component } = setup({ title: 'Test Product', price: 9.99 })
    expect(component.text()).toBe('<Link />')
  })

  describe('when given inventory', () => {
    it('should render a Link element', () => {
      const { component } = setup({ title: 'Test Product', price: 9.99, quantity: 6 })
      expect(component.text()).toBe('<Link />')
    })
  })
})
