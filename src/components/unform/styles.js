import styled from 'styled-components';

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
    background-color: #f7f9f9;
  }

  input {
    font-size: 14px;
    background: #fff;
    border: 1px solid #b2b2b2;
    box-sizing: border-box;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    padding: 10px;
    color: #333333;
    /* text-transform: uppercase; */

    :focus {
      border: 1px solid;
      border-color: #999 !important;
      outline: none;
      box-shadow: 0 0 1px #999;
    }
  }

  textarea {
    font-size: 14px;
    background: #fff;
    border: 1px solid #b2b2b2;
    box-sizing: border-box;
    border-radius: 3px;
    width: 100%;
    min-height: 31px;
    padding: 10px;
    color: #333333;

    :focus {
      border: 1px solid;
      border-color: #999 !important;
      outline: none;
      box-shadow: 0 0 1px #999;
    }
  }

  .error {
    color: red;
    font-size: 12px;
    margin: 0;
  }

  .input-error {
    border: 1px solid red !important;
  }

  /* react-select */
  .react-select__value-container {
    padding-left: 10px;
    height: 30px;
    color: #333333;
    /* text-transform: uppercase; */
  }

  .react-select__control {
    background: #fff;
    border: 1px solid #b2b2b2;
    box-sizing: border-box;
    border-radius: 3px !important;
  }

  .react-select__control--is-disabled {
    background-color: #f7f9f9 !important;
  }

  .react-select__single-value {
    font-size: 14px;
    top: 70%;
  }

  /* date */
  .react-datepicker-wrapper {
    display: flex !important;
  }

  .react-datepicker-popper {
    z-index: 999 !important;
  }
`;
