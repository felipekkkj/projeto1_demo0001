/* eslint-disable no-shadow */
import { useEffect, useRef } from 'react';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Checkbox({
  name,
  label,
  value,
  defaultChecked,
  ...rest
}) {
  const inputRef = useRef();
  const { fieldName, defaultValue, registerField, error } = useField(name);

  // const defaultChecked = defaultValue === value;

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => ref.current.checked,
      clearValue: (ref) => {
        ref.current.checked = defaultChecked;
      },
      setValue: (ref, value) => {
        ref.current.checked = value;
      },
    });
  }, [defaultValue, fieldName, registerField, defaultChecked]);

  return (
    <Container>
      <div className="form-check">
        <input
          className="form-check-input"
          defaultChecked={defaultChecked}
          ref={inputRef}
          value={value}
          type="checkbox"
          id={fieldName}
          {...rest}
        />

        <label className="form-check-label" htmlFor={fieldName} key={fieldName}>
          {label}
        </label>
      </div>

      {error && <span className="error text-left ml-1">* {error}</span>}
    </Container>
  );
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool.isRequired,
};

export const Container = styled.div`
  input:disabled {
    color: #808080;
  }

  input {
    width: 20px;
    height: 20px;

    :checked {
      background-color: #ffba00 !important;
      border-color: #ffba00 !important;
    }

    :hover {
      cursor: pointer;
    }
  }

  label {
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    color: #4d4d4d;
    margin-left: 3px;
    text-transform: uppercase;
  }

  p {
    color: #333333;
    text-transform: uppercase;
    font-size: 14px;
  }
`;
