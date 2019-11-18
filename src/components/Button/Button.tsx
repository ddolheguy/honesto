import styled from 'styled-components';

export const Primary = styled.div`
  background-color: ${({ theme }) => theme.colours.purple};
  border-radius: 4px;
  color: ${({ theme }) => theme.colours.white};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: 400;
  padding: 11px 15px;
  text-align: center;
`;
