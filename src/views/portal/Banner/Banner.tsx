import React, { memo } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { ROUTES } from '../../../config/routes';
import * as Actions from '../../../redux/actions/authenticationActions';
import { RootState } from '../../../redux/reducers/rootReducer';
import {
  availableShareEmployeesSelector,
  completedEmployeeListSelector
} from '../../../redux/selectors/employee';
import MenuItem from '../MenuItem/MenuItem';
import * as S from './Banner.style';

const Banner: React.FC<Props> = ({
  history,
  onLogout,
  shareEmployeeCount,
  completeEmployeeCount
}) => {
  return (
    <S.Container>
      <S.Row>
        <S.Title>Honesto</S.Title>
        <MenuItem
          title='Share Feedback'
          isActive={history.location.pathname === ROUTES.SHARE_FEEDBACK}
          notificationCount={shareEmployeeCount}
          onItemClick={() => history.push(ROUTES.SHARE_FEEDBACK)}
        />
        <MenuItem
          title='My Feedback'
          isActive={history.location.pathname.startsWith(
            ROUTES.MY_FEEDBACK.replace('/:employeeId?', '')
          )}
          notificationCount={completeEmployeeCount}
          onItemClick={() =>
            history.push(ROUTES.MY_FEEDBACK.replace('/:employeeId?', ''))
          }
        />
        <MenuItem
          title='Team Feedback'
          isActive={history.location.pathname === ROUTES.TEAM_FEEDBACK}
          onItemClick={() => history.push(ROUTES.TEAM_FEEDBACK)}
        />
        <MenuItem
          title='Teams'
          isActive={false}
          onItemClick={() => {
            console.log('Team not implemented');
          }}
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

const mapStateToProps = (state: RootState) => ({
  shareEmployeeCount: availableShareEmployeesSelector(state, {
    isTeam: false
  }),
  completeEmployeeCount: completedEmployeeListSelector(state).length
});

const mapDispatch = {
  onLogout: Actions.onLogout.request
};

type Props = RouteComponentProps &
  ReturnType<typeof mapStateToProps> &
  typeof mapDispatch;

export default connect(mapStateToProps, mapDispatch)(memo(withRouter(Banner)));
