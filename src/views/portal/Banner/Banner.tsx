import React, { memo } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { ROUTES } from '../../../config/routes';
import * as Actions from '../../../redux/actions/authenticationActions';
import MenuItem from '../MenuItem/MenuItem';
import * as S from './Banner.style';

const Banner: React.FC<Props> = ({ history, match, onLogout }) => {
  return (
    <S.Container>
      <S.Row>
        <S.Title>Honesto</S.Title>
        <MenuItem
          title='Share Feedback'
          isActive={true}
          notificationCount={2}
          onItemClick={() => history.push(ROUTES.SHARE_FEEDBACK)}
        />
        <MenuItem
          title='My Feedback'
          isActive={false}
          notificationCount={8}
          onItemClick={() => history.push(ROUTES.MY_FEEDBACK)}
        />
        <MenuItem
          title='Team Feedback'
          isActive={false}
          onItemClick={() => history.push(ROUTES.TEAM_FEEDBACK)}
        />
        <MenuItem
          title='Teams'
          isActive={false}
          onItemClick={() => history.push(ROUTES.TEAMS)}
        />
      </S.Row>

      <S.Row>
        <S.FeedbackCycle>
          Next Feedback Cycle:
          <S.Month>
            Sept 2018 – <S.Period>4 days</S.Period>
          </S.Month>
        </S.FeedbackCycle>
        <S.Profile>
          <S.StyledAvatar />
          <div>
            <S.Name>Jane Smith</S.Name>
            <S.LogoutLink onClick={() => onLogout()}>LOGOUT</S.LogoutLink>
          </div>
        </S.Profile>
      </S.Row>
    </S.Container>
  );
};

const mapDispatch = {
  onLogout: Actions.onLogout.request
};

type Props = RouteComponentProps & typeof mapDispatch & {};

export default connect(null, mapDispatch)(memo(withRouter(Banner)));
