import React, { useRef, useEffect } from 'react';
import ReactSelect from 'react-select';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { Container } from '../styles';

export default function SelectLabel({
  name,
  label,
  options,
  disabled,
  ...rest
}) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  // eslint-disable-next-line no-shadow
  const theme = (theme) => ({
    ...theme,
    spacing: {
      ...theme.spacing,
      // baseUnit: 0,
    },
  });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <Container>
      <label htmlFor={fieldName}>{label}</label>

      <ReactSelect
        defaultValue={options.find((item) => item.value === defaultValue)}
        ref={selectRef}
        classNamePrefix="react-select"
        options={options}
        isDisabled={disabled}
        theme={theme}
        {...rest}
      />

      {error && <span className="error text-left ml-1">* {error}</span>}
    </Container>
  );
}

SelectLabel.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(Object).isRequired,
};

SelectLabel.defaultProps = {
  disabled: false,
};
