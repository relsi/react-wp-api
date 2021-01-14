import { API_URL } from '../api';

function getToken(token) {
  return {
    url: API_URL + '/rest/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export default getToken;
