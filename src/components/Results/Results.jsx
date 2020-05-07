import React from 'react';
import { useTheming, useCharacters, usePaging } from '../../hooks/RickMortyProvider';
import withList from '../../HOCs/WithList';
import Character from '../Character/Character';
import themeStyle from '../../Theme.css';
import style from './Results.css';

const Results = () => {
  const { theme } = useTheming();
  const { deadCharacters, aliveCharacters } = useCharacters();
  const { page, totalPages, decPage, incPage } = usePaging();
  const themeToUse = (theme === 'Alive') ? themeStyle.AliveTheme : themeStyle.DeadTheme;

  const list = (theme === 'Alive') ? aliveCharacters : deadCharacters;
  const Characters = withList(Character);

  return (
    <section className={style.Results + ' ' + themeToUse}>
      <nav>
        <button disabled={page === 1} onClick={decPage}>Previous Page</button>
        <p>{page}/{totalPages}</p>
        <button disabled={page === totalPages} onClick={incPage}>Next Page</button>
      </nav>
      <Characters list={list} />
    </section>
  );
};


export default Results;
