import axios from 'axios';

const SPACEX_API_URL = 'https://api.spacex.land/graphql/';
const CATS_API_URL = 'https://api.thecatapi.com/v1/images/search';

const query = `
{ 
  rockets { 
    name 
  } 
  ships { 
    name 
  } 
  missions { 
    name 
  } 
}
  `;

//Main API. Used for generate quess words in game
export const spacexAPI = () => {
  return axios({
    url: SPACEX_API_URL,
    method: 'POST',
    data: {
      query,
    },
  });
};

//API for add cats photo in game result
export const catsAPI = () => {
  return axios({
    url: CATS_API_URL,
    method: 'GET',
    headers: {
      'X-API-KEY': process.env.REACT_APP_CATSAPI_TOKEN,
    },
  });
};
