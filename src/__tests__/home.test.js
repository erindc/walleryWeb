import Home from '../pages/HomePage';
import React from 'react'
import { shallow } from 'enzyme'

describe('Home', () => {
  it('renders without crashing', () => {
    const component = shallow(<Home />)
    expect(component).toMatchSnapshot()
  })
})