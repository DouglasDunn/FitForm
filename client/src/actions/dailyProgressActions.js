import axios from 'axios';

import {
  DAILY_PROGRESS_LOADING,
  ADD_DAILY_PROGRESS,
  GET_ERRORS
} from './types';

export const addDailyProgress = (dailyProgressData, history) => dispatch => {
  // dispatch(clearErrors());
  axios
    .post('api/daily-progress', dailyProgressData)
    .then(res =>
      dispatch({
        type: ADD_DAILY_PROGRESS,
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
export const setDailyProgressLoading = () => {
  return {
    type: DAILY_PROGRESS_LOADING
  };
};
