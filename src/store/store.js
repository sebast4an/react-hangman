import { createStore } from 'redux';
import { saveInLocalStorage, loadFromLocalStorage } from 'helpers/localStorage';

export const addWins = payload => {
  return {
    type: 'ADD_WINS',
    payload,
  };
};

export const addLosers = payload => {
  return {
    type: 'ADD_LOSERS',
    payload,
  };
};

const localData = loadFromLocalStorage('mainStatistics');
const initialState = localData || {
  plays: 0,
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

store.subscribe(() => {
  const storeState = store.getState();
  saveInLocalStorage('mainStatistics', storeState);
});
