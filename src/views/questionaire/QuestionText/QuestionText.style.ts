import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 21px;
`;

export const TextArea = styled.textarea.attrs({
  placeholder: 'Say somthing'
})`
  background-color: ${({ theme }) => theme.colours.white};
  border: 1px solid ${({ theme }) => theme.colours.grey};
  box-sizing: border-box;
  border-radius: 3px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  height: 230px;
  line-height: 19px;
  padding: 20px;
  width: 100%;
`;
