import { FETCH_SETTINGS } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SETTINGS: 
      return action.payload
    default:
      return state;
  }
};