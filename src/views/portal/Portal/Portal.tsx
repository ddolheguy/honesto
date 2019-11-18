import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import MyFeedback from '../../myFeedback/MyFeedback/MyFeedback';
import ShareFeedback from '../../shareFeedback/ShareFeedback/ShareFeedback';
import Banner from '../Banner/Banner';
import * as S from './Portal.style';

const Portal: React.FC = () => {
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
          <Redirect to='/share-feedback' />
        </Switch>
      </S.Content>
    </S.Container>
  );
};

export default Portal;
