import React from 'react';
import PropTypes from 'prop-types';

const Character = ({
  status,
  species,
  name,
  image
}) => (
  <>
    <h2>{name}</h2>
    <img src={image} alt={name}/>
    <p>Species: {species}</p>
    <p>Status: {status}</p>
  </>
);

Character.propTypes = {
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Character;
