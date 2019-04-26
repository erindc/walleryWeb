import NavBar from '../shared/Nav';
import React from 'react'
import { shallow } from 'enzyme'

describe('NavBar', () => {
  it('renders the correct elements for authenticated', () => {
    const component = shallow(<NavBar authenticated={true} currentUser={'test'} />)
    expect(component).toMatchSnapshot()
  })

  it('renders the correct elements for unauthenticated', () => {
    const component = shallow(<NavBar authenticated={false} currentUser={'test'} />)
    expect(component).toMatchSnapshot()
  })
})