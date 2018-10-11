import {
  DAILY_PROGRESS_LOADING,
  SET_DATE_FOR_FORM
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
    case SET_DATE_FOR_FORM:
      console.log(action);
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
