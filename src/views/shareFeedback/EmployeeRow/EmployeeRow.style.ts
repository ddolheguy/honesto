import styled from 'styled-components';
import { Avatar, Button, Typography } from '../../../components';

export const Name = styled(Typography.H2)`
  color: #59636e;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(172, 177, 182, 0.33);
  padding: 17px 20px;

  &:hover {
    background: rgba(213, 176, 242, 0.1);

    ${Name} {
      color: ${({ theme }) => theme.colours.black};
    }
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledAvatar = styled(Avatar.Primary)``;

export const ActionButton = styled(Button.Primary)``;
