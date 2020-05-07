import React from 'react';
import { shallow } from 'enzyme';
import Results from './Results';
import { RickMortyProvider } from '../../hooks/RickMortyProvider';

describe('Results component', () => {
  it('renders Results', () => {
    const wrapper = shallow(
      <RickMortyProvider>
        <Results/>
      </RickMortyProvider>);
    expect(wrapper).toMatchSnapshot();
  });
});
