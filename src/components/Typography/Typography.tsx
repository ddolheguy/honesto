import styled from 'styled-components';

const TextBase = styled.div`
  color: ${({ theme }) => theme.colours.black};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
`;

export const H1 = styled(TextBase)`
  font-size: 24px;
  line-height: 28px;
`;

export const Body = styled(TextBase)``;
