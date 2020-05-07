import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import fetchCharacters from '../services/rickMorty';

const RickMortyContext = createContext();

const RickMortyProvider = ({ children }) => {
  const [aliveCharacters, setAliveCharacters] = useState([]);
  const [deadCharacters, setDeadCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(25);

  const incPage = setPage(prev => prev + 1);
  const decPage = setPage(prev => prev - 1);

  useEffect(() => {
    fetchCharacters(page)
      .then(({ alive, dead, totalPages }) => {
        setAliveCharacters(alive);
        setDeadCharacters(dead);
        setTotalPages(totalPages);
      });
  }, [page]);

  return (
    <RickMortyContext.Provider value={{ aliveCharacters, deadCharacters, paging: { page, totalPages, incPage, decPage } }}>
      {children}
    </RickMortyContext.Provider>
  );
};

RickMortyProvider.propTypes = { children: PropTypes.node };

export default RickMortyProvider;

export const useCharacters = () => {
  const { aliveCharacters, deadCharacters } = useContext(RickMortyProvider);
  return { aliveCharacters, deadCharacters };
};

export const usePaging = () => {
  const { paging } = useContext(RickMortyProvider);
  return paging;
};
