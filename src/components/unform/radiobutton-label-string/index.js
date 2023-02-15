import { useEffect, useRef } from 'react';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function RadioButonStringValue({
  name,
  label,
  defaultValue,
  onChange,
  options,
  ...rest
}) {
  const inputRefs = useRef([]);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs,
      getValue: (refs) => refs.current.find((input) => input?.checked)?.value,
      setValue: (refs, id) => {
        const inputRef = refs.current.find((ref) => ref.id === id);
        if (inputRef) inputRef.checked = true;
      },
      clearValue: (refs) => {
        const inputRef = refs.current.find((ref) => ref.checked === true);
        if (inputRef) inputRef.checked = false;
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <label htmlFor={fieldName}>{label}</label>

      <div className="mt-2">
        {options.map((option, index) => (
          <div
            className="form-check form-check-inline teste"
            key={option.value}
          >
            <input
              id={option.value.toString()}
              type="radio"
              name={name}
              ref={(ref) => {
                inputRefs.current[index] = ref;
              }}
              onChange={onChange}
              defaultChecked={defaultValue === option.value}
              className="form-check-input"
              value={option.value}
              {...rest}
            />
            <label
              className="form-check-label"
              htmlFor={option.value.toString()}
              key={option.value}
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>

      {error && <span className="error text-left ml-1">* {error}</span>}
    </Container>
  );
}

RadioButonStringValue.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  options: PropTypes.arrayOf(Object).isRequired,
  onChange: PropTypes.func.isRequired,
};

RadioButonStringValue.defaultProps = {
  defaultValue: '',
};

export const Container = styled.div`
  input:disabled {
    color: #808080;
  }

  input {
    width: 20px;
    height: 20px;

    :checked {
      background-color: #ffba00;
      border-color: #ffba00;
    }

    :hover {
      cursor: pointer;
    }
  }

  label {
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 18px;
    color: #4d4d4d;
    margin-top: 5px;
    text-transform: uppercase;
  }

  p {
    color: #333333;
    text-transform: uppercase;
    font-size: 14px;
  }
`;
