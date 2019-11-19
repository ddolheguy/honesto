import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colours.white};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 21px;
  margin-top: 21px;
`;
