import React from 'react';
import { useTheming, useCharacters } from '../../hooks/RickMortyProvider';
import withList from '../../HOCs/WithList';
import Character from '../Character/Character';

const Results = () => {
  const { theme } = useTheming();
  const { deadCharacters, aliveCharacters } = useCharacters();

  const list = (theme === 'Alive') ? aliveCharacters : deadCharacters;
  const Characters = withList(Character);

  return (
    <Characters list={list} />
  );
};


export default Results;
