/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './inputStyle.scss';

function inputSection({
  htmlFor, type, content, id, value, functionName
}) {
  return (
    <label
      className="input-section"
      htmlFor={htmlFor}
    >
      {content}
      <input
        className="input-section__input"
        type={type}
        id={id}
        value={value}
        onChange={(createEvent) => functionName(createEvent.target.value)}
      />
    </label>
  );
}

export default inputSection;
