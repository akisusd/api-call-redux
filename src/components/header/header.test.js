import React from 'react'
import { shallow } from 'enzyme'
import Navigation from './header'

const setup = () => {
  const component = shallow(
    <Navigation />
  )

  return {
    component: component
  }
}

describe('Form component', () => {
  it('should render a Link element', () => {
    const { component } = setup()
    expect(component.text()).toBe('<NavLink /><NavLink /><NavLink />')
  })
})
