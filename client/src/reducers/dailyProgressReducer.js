import {
  DAILY_PROGRESS_LOADING,
  ADD_DAILY_PROGRESS
} from '../actions/types';

const initialState = {
  progressArray: [],
  progress: {},
  loading: false
};

export default function(state = initialState, action) {
  switch(action.type) {
    case DAILY_PROGRESS_LOADING:
      return {
        ...state,
        loading: true
      };
    case ADD_DAILY_PROGRESS:
      return {
        ...state,
        progressArray: [action.payload, ...state.progressArray]
      }
    default:
      return state;
  }
}
