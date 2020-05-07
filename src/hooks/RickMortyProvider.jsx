import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { fetchCharacters } from '../services/rickMorty';

const RickMortyContext = createContext();

export const RickMortyProvider = ({ children }) => {
  const [aliveCharacters, setAliveCharacters] = useState([]);
  const [deadCharacters, setDeadCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(25);
  const [theme, setTheme] = useState('Alive');

  const incPage = () => setPage(prev => (prev + 1));
  const decPage = () => setPage(prev => (prev - 1));

  useEffect(() => {
    fetchCharacters(page)
      .then(({ alive, dead, totalPages }) => {
        setAliveCharacters(alive);
        setDeadCharacters(dead);
        setTotalPages(totalPages);
      });
  }, []);

  return (
    <RickMortyContext.Provider value={{
      aliveCharacters, 
      deadCharacters, 
      theming: { theme, setTheme }, 
      paging: { decPage, incPage, page, totalPages }
    }}
    >
      {children}
    </RickMortyContext.Provider>
  );
};

RickMortyProvider.propTypes = { children: PropTypes.node };

export const useCharacters = () => {
  const { aliveCharacters, deadCharacters } = useContext(RickMortyContext);
  return { aliveCharacters, deadCharacters }; 
};

export const usePaging = () => {
  const { paging } = useContext(RickMortyContext);
  return paging;
};
export const useTheming = () => {
  const { theming } = useContext(RickMortyContext);
  return theming;
};
