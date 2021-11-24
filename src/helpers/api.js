import axios from 'axios';

const API_URL = 'https://api.spacex.land/graphql/';

export const getDataFromAPI = () => {
  return axios({
    url: API_URL,
    method: 'post',
    data: {
      query: `
        {
          rockets {
            name
          }
        }
        `,
    },
  });
};
