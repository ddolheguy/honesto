import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import { ROUTES } from '../../../config/routes';
import * as Action from '../../../redux/actions/employeeActions';
import MyFeedback from '../../myFeedback/MyFeedback/MyFeedback';
import Questionaire from '../../questionaire/Questionaire/Questionaire';
import ShareFeedback from '../../shareFeedback/ShareFeedback/ShareFeedback';
import TeamFeedback from '../../teamFeedback/TeamFeedback/TeamFeedback';
import Banner from '../Banner/Banner';
import * as S from './Portal.style';

const Portal: React.FC<Props> = ({ onFetchEmplpyees }) => {
  useEffect(() => {
    onFetchEmplpyees();
  }, [onFetchEmplpyees]);
  return (
    <S.Container>
      <Banner />
      <S.Content>
        <Switch>
          <Route
            path={ROUTES.SHARE_FEEDBACK}
            exact={true}
            component={ShareFeedback}
          />
          <Route
            path={ROUTES.MY_FEEDBACK}
            exact={true}
            component={MyFeedback}
          />
          <Route
            path={ROUTES.TEAM_FEEDBACK}
            exact={true}
            component={TeamFeedback}
          />
          <Route
            path={ROUTES.EMPLOYEE_QUESTIONAIRE}
            exact={true}
            component={Questionaire}
          />
          <Redirect to={ROUTES.SHARE_FEEDBACK} />
        </Switch>
      </S.Content>
    </S.Container>
  );
};

const dispatchToProps = {
  onFetchEmplpyees: Action.onFetchEmplpyees.request
};

type Props = typeof dispatchToProps;

export default connect(null, dispatchToProps)(memo(Portal));
