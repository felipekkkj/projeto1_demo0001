import React, { useRef, useEffect } from 'react';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { Container } from '../styles';

export default function InputTextAreaLabel({
  name,
  label,
  rows,
  cols,
  ...rest
}) {
  const inputRef = useRef(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <label htmlFor={fieldName}>{label}</label>
      <textarea
        id={fieldName}
        ref={inputRef}
        rows={rows}
        cols={cols}
        defaultValue={defaultValue}
        onChange={(e) => e.target.value}
        className={error ? 'input-error' : ''}
        {...rest}
      />

      {error && <span className="error text-left ml-1">* {error}</span>}
    </Container>
  );
}

InputTextAreaLabel.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
};
