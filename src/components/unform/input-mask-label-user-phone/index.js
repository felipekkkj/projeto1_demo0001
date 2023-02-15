import React, { useRef, useEffect } from 'react';
import ReactInputMask from 'react-input-mask';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { Container } from '../styles';

export default function InputMaskLabelUserPhone({ name, label, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue: (pickerRef) => {
        pickerRef.setInputValue(null);
      },
    });
  }, [inputRef.current, fieldName]);

  return (
    <Container>
      <label htmlFor={fieldName}>{label}</label>
      <ReactInputMask
        className={error ? 'input-error' : ''}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && <span className="error text-left ml-1">* {error}</span>}
    </Container>
  );
}

InputMaskLabelUserPhone.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
