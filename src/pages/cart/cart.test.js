import React from 'react'
import { shallow } from 'enzyme'
import Cart from './cart'

const setup = () => {
  const component = shallow(
    <Cart/>
  )

  return {
    component: component
  }
}

describe('Cart page', () => {
  it('should render a h3 for modal element', () => {
    const { component } = setup()
    expect(component.contains('CartContainer'))
  })
})
