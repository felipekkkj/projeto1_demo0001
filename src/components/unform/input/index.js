import React, { useRef, useEffect } from 'react';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { Container } from '../styles';

export default function Input({ name, ...rest }) {
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
      <input
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        onChange={(e) => e.target.value}
        className={error ? 'input-error' : ''}
        autoComplete="new-password"
        {...rest}
      />

      {error && <span className="error text-left ml-1">* {error}</span>}
    </Container>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
};
