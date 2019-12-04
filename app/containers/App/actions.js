import {
  START_LIGHTS,
  START_LIGHTS_SUCCESS,
  START_LIGHTS_ERROR,
} from './constants';

/**
 * Starts the process of turning up lights
 *
 * @return {object} An action object with a type of START_LIGHTS
 */
export function turnLights() {
  return {
    type: START_LIGHTS,
  };
}

/**
 * Dispatched when the lights are turned on
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of START_LIGHTS_SUCCESS passing the repos
 */
export function lightsTurned(repos, username) {
  return {
    type: START_LIGHTS_SUCCESS,
    repos,
    username,
  };
}

/**
 * Dispatched when turning on the lights fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of START_LIGHTS_ERROR passing the error
 */
export function lightsTurningError(error) {
  return {
    type: START_LIGHTS_ERROR,
    error,
  };
}
