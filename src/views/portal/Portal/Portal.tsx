import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import * as Action from '../../../redux/actions/employeeActions';
import MyFeedback from '../../myFeedback/MyFeedback/MyFeedback';
import Questionaire from '../../questionaire/Questionaire/Questionaire';
import ShareFeedback from '../../shareFeedback/ShareFeedback/ShareFeedback';
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
            path='/share-feedback'
            exact={true}
            component={ShareFeedback}
          />
          <Route path='/my-feedback' exact={true} component={MyFeedback} />
          <Route
            path='/questions/:employeeId'
            exact={true}
            component={Questionaire}
          />
          <Redirect to='/share-feedback' />
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
