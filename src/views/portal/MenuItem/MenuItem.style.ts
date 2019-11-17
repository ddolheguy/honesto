import styled from 'styled-components';
import { Typography } from '../../../components';

type ContainerProps = {
  isActive: boolean;
};

export const Container = styled.div<ContainerProps>`
  cursor: pointer;
  position: relative;
  justify-content: center;
  border-bottom: 3px solid
    ${({ isActive, theme }) =>
      isActive ? theme.colours.purple : 'transparent'};
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 35px;
`;

export const Title = styled(Typography.Body)``;

export const Notification = styled.div`
  position: absolute;
  margin-top: -13px;
  right: -20px;
  background-color: ${({ theme }) => theme.colours.purple};
  border-radius: 8px;
  color: ${({ theme }) => theme.colours.white};
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  width: 16px;
  height: 16px;
`;
