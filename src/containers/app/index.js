import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Notification from '../../components/Notification';
import Register from '../register';

const App = props => {
  const { app } = props;

  return (
    <div>
      <Notification message={app.message} />
      <Route exact path="/" component={Register} />
    </div>
  );
};

export default connect(state => state)(App);
