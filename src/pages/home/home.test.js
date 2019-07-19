import React from 'react'
import { shallow } from 'enzyme'
import Home from './home'
import ProductsContainer from '../../containers/ProductsContainer'

const setup = () => {
  const component = shallow(
    <Home/>
  )

  return {
    component: component
  }
}

describe('Home page', () => {
  it('should render home page', () => {
    const { component } = setup()
    expect(component.contains('ProductsContainer'))
  })
})
