import { createStore } from 'redux';

export const addWins = (payload = 1) => {
  return {
    type: 'ADD_WINS',
    payload,
  };
};

export const addLosers = (payload = 1) => {
  return {
    type: 'ADD_LOSERS',
    payload,
  };
};

const initialState = {
  plays: 1,
  wins: 0,
  losers: 0,
};

export const widgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_WINS':
      return {
        ...state,
        plays: state.plays + 1,
        wins: state.wins + action.payload,
      };
    case 'ADD_LOSERS':
      return {
        ...state,
        plays: state.plays + 1,
        losers: state.losers + action.payload,
      };
    default:
      return state;
  }
};

export const store = createStore(widgetReducer);
