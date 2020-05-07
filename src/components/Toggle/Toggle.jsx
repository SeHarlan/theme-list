import React from 'react';
import PropTypes from 'prop-types';
import style from './Toggle.css';

const Toggle = ({ action, checked }) => {
  return (
    <section className={style.Toggle} >
      <input type="checkbox" id="toggle" name="toggle" onChange={action} checked={checked} />
      <label htmlFor="toggle"></label>
    </section>
  );};

Toggle.propTypes = {
  checked: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};

export default Toggle;
