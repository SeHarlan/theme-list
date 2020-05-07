import React from 'react';
import { RickMortyProvider } from '../../hooks/RickMortyProvider';
import MyHeader from '../Header/Header';
import Results from '../Results/Results';

export default function App() {
  return <RickMortyProvider>
    <MyHeader />
    <Results />
  </RickMortyProvider>;
}
  
