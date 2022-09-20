import styled from '@emotion/styled';

export const Button = styled.button`
  font-weight: ${p => p.theme.fontWeights.bold};

  margin: 0;
  margin-top: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[2]}px;
  border: ${p => p.theme.borders.small};
  border-radius: ${p => p.theme.radii.big};

  cursor: pointer;
  transition: background-color ${p => p.theme.transitions.normal},
    color ${p => p.theme.transitions.normal};

  &:focus,
  &:hover {
    outline: none;

    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.dark};
  }
`;

export const Form = styled.form`
  width: ${p => p.theme.sizes.wide};
  margin-left: ${p => p.theme.space[1]}px;
  padding: ${p => p.theme.space[3]}px;

  border: ${p => p.theme.borders.mediumDashed + p.theme.colors.accentSecondary};
`;

export const Label = styled.label`
  font-size: ${p => p.theme.fontSizes[2]};
  font-weight: ${p => p.theme.fontWeights.medium};

  display: block;
  margin-bottom: ${p => p.theme.space[2]}px;

  transition: color ${p => p.theme.transitions.normal};

  &:focus-within {
    color: ${p => p.theme.colors.accent};
  }
`;

export const Input = styled.input`
  font-size: ${p => p.theme.fontSizes[1]};
  font-weight: ${p => p.theme.fontWeights.medium};

  display: block;
  width: ${p => p.theme.sizes.small};
  margin-top: ${p => p.theme.space[1]}px;
  padding: ${p => p.theme.space[1]}px;
  border-radius: ${p => p.theme.radii.normal};
  border-style: solid;
  outline: none;

  transition: border-color ${p => p.theme.transitions.normal};

  &:focus,
  &:active {
    border-color: ${p => p.theme.colors.accent};
  }
`;
