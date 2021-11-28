import axios from 'axios';

const API_URL = 'https://api.spacex.land/graphql/';

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

export const getDataFromSpaceXapi = () => {
  return axios({
    url: API_URL,
    method: 'post',
    data: {
      query,
    },
  });
};
