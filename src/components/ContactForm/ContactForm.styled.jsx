import styled from '@emotion/styled';

const accentedColor = '#00b984';
const defTransParam = '250ms ease-in-out';

export const Button = styled.button`
  font-weight: 700;

  margin: 0;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid;
  border-radius: 8px;

  cursor: pointer;
  transition: background-color ${defTransParam}, color ${defTransParam};

  &:focus,
  &:hover {
    outline: none;

    background-color: ${accentedColor};
    color: #121c2f;
  }
`;

export const Form = styled.form`
  width: 450px;
  margin-left: 5px;
  padding: 15px;

  border: 2px dashed #5c91f9;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;

  display: block;
  margin: 0 0 10px;

  transition: color ${defTransParam};

  &:focus-within {
    color: ${accentedColor};
  }
`;

export const Input = styled.input`
  font-size: 14px;
  font-weight: 500;

  display: block;
  width: 200px;
  margin: 5px 0 0;
  padding: 5px;
  border-radius: 5px;
  border-style: solid;
  outline: none;

  transition: border-color ${defTransParam};

  &:focus,
  &:active {
    border-color: ${accentedColor};
  }
`;
