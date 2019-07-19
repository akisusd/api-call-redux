import React from 'react'
import { shallow } from 'enzyme'
import EditProductForm from './index'
import Product from '../product/Product'
import {EditForm} from './editForm'

const setup = () => {
  const actions = {
      onChange: jest.fn(),
      handleSubmit: jest.fn()
  }

  const component = shallow(
    <EditProductForm />
  )

  return {
    component: component,
    actions: actions,
    form: component.find(EditForm),
  }
}

describe('Form component', () => {
  it('should disable button', () => {
    const { form } = setup()
    expect(form.prop('disabled')).toEqual('disabled')
  })
})
