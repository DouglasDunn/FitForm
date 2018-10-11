import axios from 'axios';

import {
  DAILY_PROGRESS_LOADING,
  SET_DATE_FOR_FORM
} from './types';

export const getDailyProgressForm = (dateClickedOn, history) => dispatch => {
  dispatch(setDailyProgressLoading);
  dispatch({
    type: SET_DATE_FOR_FORM,
    payload: dateClickedOn
  });
  history.push('/add-daily-progress');
};

// Get Goals
// export const getGoals = () => dispatch => {
//   dispatch(setGoalLoading());
//   axios
//     .get('/api/goals')
//     .then(res =>
//       dispatch({
//         type: GET_GOALS,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_GOALS,
//         payload: null
//       })
//     );
// };

// Set loading state
export const setDailyProgressLoading = () => {
  return {
    type: DAILY_PROGRESS_LOADING
  };
};
