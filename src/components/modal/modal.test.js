import React from 'react'
import { shallow } from 'enzyme'
import {Modal} from './modal'

const setup = (props) => {
  const component = shallow(
    <Modal {...props} />
  )

  return {
    component: component
  }
}

describe('Modal component', () => {
  it('should render a h3 for modal element', () => {
    const { component } = setup({product:{ title: 'Test Product', price: 9.99 }})
    expect(component.text()).toBe('Editing product:')
  })
})
