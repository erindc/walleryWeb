import Gallery from '../pages/GalleryPage';
import React from 'react'
import { shallow } from 'enzyme'

describe('Gallery', () => {
  it('renders without crashing', () => {
    const component = shallow(<Gallery />)
    expect(component).toMatchSnapshot()
  })
})