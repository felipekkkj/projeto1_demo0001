/* eslint-disable prettier/prettier */
import React, { useRef, useEffect } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function SelectScrollingLabel({
  name,
  label,
  value,
  loadOptions,
  disabled,
  ...rest
}) {
  const selectRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <Container>
      <label htmlFor={fieldName}>{label}</label>

      <div ref={selectRef}>
        <AsyncPaginate
          isDisabled={disabled}
          value={value}
          loadOptions={loadOptions}
          {...rest}
        />
      </div>

      {error && <span className="error text-left ml-1">* {error}</span>}
    </Container>
  );
}

SelectScrollingLabel.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.shape({}).isRequired,
  loadOptions: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

SelectScrollingLabel.defaultProps = {
  disabled: false,
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-right: auto;
  margin-left: auto;
  width: 100%;

  label {
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 14px;
    color: #4d4d4d;
    margin: 0;
    text-transform: uppercase;
  }

  a {
    :hover {
      color: #dc3545 !important;
      font-weight: 600;
    }
  }

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 18px;
    color: #4d4d4d;
    margin: 0;
    margin-top: 15px;
    padding: 0;
  }

  input:disabled {
    color: #808080;
  }

  .css-1fhf3k1-control {
    background-color: #fff !important;
    border: 1px solid #b2b2b2;
    font-size: 14px;
    color: #333333;
  }

  .error {
    color: red;
    font-size: 12px;
    margin: 0;
  }

  .input-error {
    border: 1px solid red !important;
  }

  .css-yk16xz-control {
    font-size: 14px;
    background: #fff;
    border: 1px solid #b2b2b2;
    box-sizing: border-box;
    border-radius: 3px;
    height: 38px;
    color: #333333;
    /* text-transform: uppercase; */

    :focus {
      border: 1px solid;
      border-color: #999 !important;
      outline: none;
      font-size: 14px;
      box-shadow: 0 0 1px #999;
    }
  }
`;
