import styled from 'styled-components';

type ButtonProps = {
  disabled?: boolean;
};

export const Primary = styled.div<ButtonProps>`
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colours.disabled : theme.colours.darkPurple};
  border-radius: 4px;
  color: ${({ theme }) => theme.colours.white};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: 400;
  padding: 11px 15px;
  text-align: center;
  min-width: 100px;
  user-select: none;
`;

export const FormAction = styled.div<ButtonProps>`
  background-color: ${({ theme }) => theme.colours.disabled};
  border-radius: 4px;
  color: ${({ theme }) => theme.colours.white};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: 400;
  padding: 11px 15px;
  text-align: center;
  min-width: 100px;
  user-select: none;

  :hover {
    background-color: ${({ disabled, theme }) =>
      disabled ? theme.colours.disabled : theme.colours.purple};
  }
`;

export const Secondary = styled.div<ButtonProps>`
  background-color: ${({ theme }) => theme.colours.white};
  border: 1px solid ${({ theme }) => theme.colours.grey};
  border-radius: 4px;
  color: ${({ theme }) => theme.colours.black};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: 400;
  padding: 11px 15px;
  text-align: center;
  min-width: 100px;
  user-select: none;
`;
