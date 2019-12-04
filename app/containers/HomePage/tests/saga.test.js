/**
 * Tests for HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { START_LIGHTS } from 'containers/App/constants';
import { lightsTurned, lightsTurningError } from 'containers/App/actions';

import githubData, { turnLights } from '../saga';

const username = 'mxstbr';

/* eslint-disable redux-saga/yield-effects */
describe('turnLights Saga', () => {
  let turnLightsGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    turnLightsGenerator = turnLights();

    const selectDescriptor = turnLightsGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = turnLightsGenerator.next(username).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the lightsTurned action if it requests the data successfully', () => {
    const response = [
      {
        name: 'First repo',
      },
      {
        name: 'Second repo',
      },
    ];
    const putDescriptor = turnLightsGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(lightsTurned(response, username)));
  });

  it('should call the lightsTurningError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = turnLightsGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(lightsTurningError(response)));
  });
});

describe('githubDataSaga Saga', () => {
  const githubDataSaga = githubData();

  it('should start task to watch for START_LIGHTS action', () => {
    const takeLatestDescriptor = githubDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(START_LIGHTS, turnLights));
  });
});
