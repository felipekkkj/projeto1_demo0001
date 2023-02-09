import React, { useRef, useEffect, useState } from 'react';
import MaskedInput from 'react-text-mask';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import { Container } from '../styles';

const defaultMaskOptions = {
  prefix: 'R$ ',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: '.',
  allowDecimal: true,
  decimalSymbol: ',',
  decimalLimit: 2,
  integerLimit: 7,
  allowNegative: false,
  allowLeadingZeroes: false,
};

export default function InputCurrencyLabel({
  name,
  label,
  maskOptions,
  ...rest
}) {
  const inputRef = useRef(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  const [inputValue, setInputValue] = useState(defaultValue);

  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions,
  });

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = inputValue;
    }
  }, [inputValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue: (_, value) => {
        setInputValue(value);
      },
      clearValue: () => {
        setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <label htmlFor={fieldName}>{label}</label>

      <MaskedInput
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={error ? 'input-error' : ''}
        {...rest}
        mask={currencyMask}
      />

      {error && <span className="error text-left ml-1">* {error}</span>}
    </Container>
  );
}

InputCurrencyLabel.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maskOptions: PropTypes.func,
};

InputCurrencyLabel.defaultProps = {
  maskOptions: PropTypes.func,
};
