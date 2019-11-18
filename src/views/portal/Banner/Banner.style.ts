import styled from 'styled-components';
import { Typography } from '../../../components';

export const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colours.lightGrey};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  height: 75px;
  padding-left: 130px;
  white-space: nowrap;
  user-select: none;
`;

export const Title = styled(Typography.H1)`
  padding-right: 66px;
  font-weight: 600;
`;

export const Row = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
`;

export const FeedbackCycle = styled(Typography.Body)`
  font-size: 11px;
  line-height: 17px;
  text-align: center;
  padding-right: 20px;
`;

export const Month = styled(Typography.Body)`
  display: flex;
  align-items: center;
`;

export const Period = styled(Typography.Body)`
  color: ${({ theme }) => theme.colours.green};
`;

export const Profile = styled.div`
  align-items: center;
  border-left: 1px solid ${({ theme }) => theme.colours.grey};
  display: flex;
  padding: 0 60px 0 20px;
  height: 100%;
`;

export const Avatar = styled.div`
  background: url('/images/avatar.png') no-repeat;
  height: 58px;
  padding-right: 17px;
  width: 58px;
`;

export const Name = styled(Typography.Body)``;

export const LogoutLink = styled(Typography.Body)`
  cursor: pointer;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;
