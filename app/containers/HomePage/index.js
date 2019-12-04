/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import CenteredSection from './CenteredSection';
import Img from './Img';
import ChristmasButton from './ChristmasButton';
import Loader from './Loader';
import { turnLights } from '../App/actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import mainText from '../../images/main-text.svg';

const key = 'home';

export function HomePage({ loading, turnLightsOn }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <article>
      <Helmet>
        <title>Christmas Generator</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      {loading && <Loader />}
      <div>
        <CenteredSection>
          <Img src={mainText} alt="" />
          <ChristmasButton onClick={turnLightsOn}>
            Turn On The Lights
          </ChristmasButton>
        </CenteredSection>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  turnLightsOn: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    turnLightsOn: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(turnLights());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
