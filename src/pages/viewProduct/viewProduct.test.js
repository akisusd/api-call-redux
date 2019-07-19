import React from 'react'
import { shallow } from 'enzyme'
import ViewProduct from './viewProduct'

const setup = () => {
  const component = shallow(
    <ViewProduct/>
  )

  return {
    component: component
  }
}

describe('ViewProduct page', () => {
  it('should render product page', () => {
    const { component } = setup()
    expect(component.contains('ProductForm'))
  })
})
