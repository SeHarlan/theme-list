import React from 'react';
import Toggle from '../Toggle/Toggle';
import { useTheming } from '../../hooks/RickMortyProvider';

const MyHeader = () => {
  const { setTheme, theme } = useTheming();

  const toggle = () => {
    if(theme === 'Alive') setTheme('Dead');
    else setTheme('Alive');
  };

  return (
    <header>
      <h1>Morty and Rick</h1>
      <em>Not Alive or Alive</em>
      <Toggle action={toggle} checked={theme === 'Alive'} theme={theme}/>
    </header>
  );};


export default MyHeader;
