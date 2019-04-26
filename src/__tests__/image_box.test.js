import ImageBox from '../shared/ImageBox';
import React from 'react'
import { shallow } from 'enzyme'

const like = jest.fn();
const flag = jest.fn();
const purchase = jest.fn();

describe('ImageBox', () => {
  it('renders without crashing', () => {
    const component = shallow(<ImageBox image={{id:'id', user_id:'user_id', image_tag:'tag', purchased:false, likes:0, flags:0, location:'somewhere'}} handleLike={like} handleFlag={flag} handlePurchase={purchase} />)
    expect(component).toMatchSnapshot()
  })
})