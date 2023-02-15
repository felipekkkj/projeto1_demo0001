import React, { useRef, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import { useField } from '@unform/core';
import pt_BR from 'date-fns/locale/pt-BR';
import PropTypes from 'prop-types';

import { Container } from '../styles';
import 'react-datepicker/dist/react-datepicker.css';

export default function InputDateLabel({ name, label, defaultValue, ...rest }) {
  const datepickerRef = useRef(null);

  const { fieldName, registerField, error } = useField(name);

  const [date, setDate] = useState(defaultValue || null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: 'props.selected',
      clearValue: (ref) => {
        ref.clear();
      },
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    let isSubscribed = true;

    if (defaultValue && isSubscribed) {
      setDate(new Date(defaultValue));
    }

    // eslint-disable-next-line no-return-assign
    return () => (isSubscribed = false);
  }, [defaultValue]);

  return (
    <Container>
      <label htmlFor={fieldName}>{label}</label>

      <DatePicker
        id={fieldName}
        ref={datepickerRef}
        dateFormat="dd/MM/yyyy"
        locale={pt_BR}
        selected={date}
        onChange={setDate}
        className={error ? 'input-error' : ''}
        {...rest}
      />

      {error && <span className="error text-left ml-1">* {error}</span>}
    </Container>
  );
}

InputDateLabel.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.instanceOf(Date),
};

InputDateLabel.defaultProps = {
  defaultValue: null,
};
