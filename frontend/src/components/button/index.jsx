/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './buttonStyle.scss';

function standardButton({ type, content, functionName }) {
  return (
    <button type={type} className="standard-button" onClick={functionName}>{content}</button>
  );
}

export default standardButton;
