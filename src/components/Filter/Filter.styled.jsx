import styled from '@emotion/styled';
import { interactiveInput } from 'components/common/sharedStyles';

export const FilterLabel = styled.label`
  font-size: ${p => p.theme.fontSizes[2]};
  font-weight: ${p => p.theme.fontWeights.medium};

  display: block;
  margin-bottom: ${p => p.theme.space[2]}px;

  transition: color ${p => p.theme.transitions.normal};

  &:focus-within {
    color: ${p => p.theme.colors.accent};
  }
`;

export const FilterInput = styled.input`
  ${interactiveInput};

  font-size: ${p => p.theme.fontSizes[1]};
  font-weight: ${p => p.theme.fontWeights.medium};

  width: ${p => p.theme.sizes.small};
  margin-top: ${p => p.theme.space[1]}px;
  padding: ${p => p.theme.space[1]}px;
  border-radius: ${p => p.theme.radii.normal};
`;
