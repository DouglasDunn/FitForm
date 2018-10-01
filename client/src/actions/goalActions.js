import axios from 'axios';

import {
  GET_GOALS,
  GOAL_LOADING,
  ADD_GOAL,
  GET_ERRORS
} from './types';

// Get Goals
export const getGoals = () => dispatch => {
  dispatch(setGoalLoading());
  axios
    .get('/api/goals')
    .then(res =>
      dispatch({
        type: GET_GOALS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_GOALS,
        payload: null
      })
    );
};

// Create Goal
export const addGoal = (goalData, history) => dispatch => {
  // dispatch(clearErrors());
  axios
    .post('/api/goals', goalData)
    .then(res =>
      dispatch({
        type: ADD_GOAL,
        payload: res.data
      })
    )
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set loading state
export const setGoalLoading = () => {
  return {
    type: GOAL_LOADING
  };
};
