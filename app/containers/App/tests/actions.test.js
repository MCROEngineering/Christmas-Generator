import {
  START_LIGHTS,
  START_LIGHTS_SUCCESS,
  START_LIGHTS_ERROR,
} from '../constants';

import { loadRepos, lightsTurned, lightsTurningError } from '../actions';

describe('App Actions', () => {
  describe('loadRepos', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: START_LIGHTS,
      };

      expect(loadRepos()).toEqual(expectedResult);
    });
  });

  describe('lightsTurned', () => {
    it('should return the correct type and the passed repos', () => {
      const fixture = ['Test'];
      const username = 'test';
      const expectedResult = {
        type: START_LIGHTS_SUCCESS,
        repos: fixture,
        username,
      };

      expect(lightsTurned(fixture, username)).toEqual(expectedResult);
    });
  });

  describe('lightsTurningError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: START_LIGHTS_ERROR,
        error: fixture,
      };

      expect(lightsTurningError(fixture)).toEqual(expectedResult);
    });
  });
});
