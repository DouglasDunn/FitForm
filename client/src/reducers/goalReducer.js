import {
  ADD_GOAL,
  GET_GOALS,
  GET_GOAL,
  GOAL_LOADING
} from '../actions/types';

const initialState = {
  goals: [],
  goal: {},
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
    case GET_GOAL:
      return {
        ...state,
        goal: action.payload,
        loading: false
      }
    case ADD_GOAL:
      return {
        ...state,
        goals: [action.payload, ...state.goals]
      }
    default:
      return state;
  }
}
