import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { RickMortyProvider } from '../../hooks/RickMortyProvider';

describe('Header component', () => {
  it('renders Header', () => {
    const wrapper = shallow(
      <RickMortyProvider>
        <Header />
      </RickMortyProvider>);
    expect(wrapper).toMatchSnapshot();
  });
});
