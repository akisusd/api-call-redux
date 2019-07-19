import React from 'react'
import { shallow } from 'enzyme'
import {Form} from './form'

const setup = props => {
  const component = shallow(
    <Form {...props} />
  )

  return {
    component: component
  }
}

describe('Form component', () => {
  it('should render a Link element', () => {
    const { component } = setup({product:{ Title: 'Test Form', Brand: 'test brand', Price: 9.99, Inventory: 1 }})
    expect(component.text()).toBe('Title: Brand: Price: Inventory: Image: Save')
  })
})
