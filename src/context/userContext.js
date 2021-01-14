import React from 'react';
import getToken from '../api/endpoints/getToken';
import getUser from '../api/endpoints/getUser';

export const UserContext = React.createContext();

export const UserData = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [logged, setLogged] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  async function getUserData(token) {
    const { url, options } = getUser(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogged(true);
  }

  async function userLogin(username, password) {
    const { url, options } = getToken({ username, password });
    const response = await fetch(url, options);
    const { token } = await response.json();
    // console.log(token);
    window.localStorage.setItem('token', token);
    getUserData(token);
  }

  return (
    <UserContext.Provider value={{ userLogin, data }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserData;
