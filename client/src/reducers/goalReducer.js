import {
  GET_GOALS,
  GOAL_LOADING,
  ADD_GOAL
} from '../actions/types';

const initialState = {
  goals: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GOAL_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_GOALS:
      return {
        ...state,
        goals: action.payload,
        loading: false
      };
    case ADD_GOAL:
      return {
        ...state,
        goals: [action.payload, ...state.goals]
      }
    default:
      return state;
  }
}
