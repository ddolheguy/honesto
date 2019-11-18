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

export const H2 = styled(TextBase)`
  font-size: 22px;
  line-height: 26px;
`;

export const FieldLabel = styled(TextBase)`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;

export const Body = styled(TextBase)``;
