import React from 'react'
import { shallow } from 'enzyme'
import {EditForm} from './editForm'

const setup = props => {
  const component = shallow(
    <EditForm {...props} />
  )

  return {
    component: component
  }
}

describe('EditForm component', () => {
  it('should render a Link element', () => {
    const { component } = setup({product:{ title: 'Test Product', price: 9.99 }})
    expect(component.text()).toBe('Title: Brand: Price: Inventory: Image: EditClose')
  })
})
