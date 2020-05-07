import React from 'react';
import Toggle from '../Toggle/Toggle';
import { useTheming } from '../../hooks/RickMortyProvider';
import style from './Header.css';
import themeStyle from '../../Theme.css';

const MyHeader = () => {
  const { setTheme, theme } = useTheming();

  const toggle = () => {
    if(theme === 'Alive') setTheme('Dead');
    else setTheme('Alive');
  };

  const themeToUse = (theme === 'Alive') ? themeStyle.AliveTheme : themeStyle.DeadTheme;

  return (
    <header className={style.Header + ' ' + themeToUse} >
      <h1>Morty and Rick</h1>
      <em>Not Alive or Alive</em>
      <Toggle action={toggle} checked={theme === 'Alive'} theme={theme}/>
    </header>
  );};


export default MyHeader;
