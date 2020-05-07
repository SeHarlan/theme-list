import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character component', () => {
  it('renders Character', () => {
    const wrapper = shallow(<Character image="test" name="test" species="test" status="test"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
