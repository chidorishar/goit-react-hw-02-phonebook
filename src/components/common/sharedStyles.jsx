import { css } from '@emotion/react';

export const activeAccentedButton = p => css`
  border: ${p.theme.borders.small};

  cursor: pointer;
  transition: background-color ${p.theme.transitions.normal},
    color ${p.theme.transitions.normal};

  &:focus,
  &:hover {
    outline: none;

    background-color: ${p.theme.colors.accent};
    color: ${p.theme.colors.dark};
  }
`;
