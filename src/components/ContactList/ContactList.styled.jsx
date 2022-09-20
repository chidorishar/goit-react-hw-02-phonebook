import styled from '@emotion/styled';
import { activeAccentedButton } from 'components/common/sharedStyles';

export const ContactsList = styled.ul`
  min-width: 300px;
  max-width: 400px;
  margin: 10px 0 -8px;
  padding-left: 5px;

  list-style: inside;
`;

export const ContactInfo = styled.div`
  font-size: 16px;
  font-weight: 500;

  display: list-item;
  max-width: 250px;
  margin-left: 5px;

  word-break: break-all;
`;

export const DeleteButton = styled.button`
  ${activeAccentedButton};

  font-size: ${p => p.theme.fontSizes[2]}px;

  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[3]}px;
`;
