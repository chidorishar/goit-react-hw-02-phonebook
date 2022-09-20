import { css } from '@emotion/react';

export const activeAccentedButton = ({ theme }) => css`
  border: ${theme.borders.small};

  cursor: pointer;
  transition: background-color ${theme.transitions.normal},
    color ${theme.transitions.normal};

  &:focus,
  &:hover {
    outline: none;

    background-color: ${theme.colors.accent};
    color: ${theme.colors.dark};
  }
`;

export const interactiveInput = ({ theme }) => css`
  display: block;
  border-style: solid;
  outline: none;

  transition: border-color ${theme.transitions.normal};

  &:focus,
  &:active {
    border-color: ${theme.colors.accent};
  }
`;
