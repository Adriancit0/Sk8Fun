/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './inputStyle.scss';

function inputSection({
  htmlFor, type, content, id, value, functionName, testid, className
}) {
  return (
    <section
      className="input-section"
    >
      <label
        className="input-section__label"
        htmlFor={htmlFor}
      >
        {content}
      </label>
      <input
        className={className}
        data-testid={testid}
        type={type}
        id={id}
        value={value}
        onChange={(createEvent) => functionName(createEvent.target.value)}
      />
    </section>
  );
}

export default inputSection;
