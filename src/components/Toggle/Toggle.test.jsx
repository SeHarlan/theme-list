import React from 'react';
import { shallow } from 'enzyme';
import Toggle from './Toggle';

describe('Toggle component', () => {
  it('renders Toggle', () => {
    const wrapper = shallow(<Toggle const checked={true} theme="Alive" />);
    expect(wrapper).toMatchSnapshot();
  });
});
