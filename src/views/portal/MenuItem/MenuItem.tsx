import React, { memo } from 'react';
import * as S from './MenuItem.style';

const MenuItem: React.FC<Props> = ({
  onItemClick,
  title,
  notificationCount,
  isActive = false
}) => {
  return (
    <S.Container isActive={isActive} onClick={onItemClick}>
      <S.Title>{title}</S.Title>
      {notificationCount ? (
        <S.Notification>{notificationCount}</S.Notification>
      ) : null}
    </S.Container>
  );
};

type Props = {
  isActive: boolean;
  title: string;
  notificationCount?: number;
  onItemClick: () => void;
};

export default memo(MenuItem);
