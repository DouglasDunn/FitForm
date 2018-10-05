import axios from 'axios';

import {
  ADD_GOAL,
  GET_GOALS,
  GET_GOAL,
  GOAL_LOADING,
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

// Edit Goal
export const editGoal = (goalData, id, history) => dispatch => {
  // dispatch(clearErrors());
  axios
    .post(`/api/goals/${id}`, goalData)
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

// Get Goal
export const getGoal = id => dispatch => {
  dispatch(setGoalLoading());
  axios
    .get(`/api/goals/${id}`)
    .then(res =>
      dispatch({
        type: GET_GOAL,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_GOAL,
        payload: null
      })
    );
};

// Set loading state
export const setGoalLoading = () => {
  return {
    type: GOAL_LOADING
  };
};
