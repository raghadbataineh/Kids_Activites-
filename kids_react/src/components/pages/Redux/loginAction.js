// userActions.js

export const setUserEmail = (email) => ({
    type: 'SET_USER_EMAIL',
    payload: email,
  });
  
  export const setUserPassword = (password) => ({
    type: 'SET_USER_PASSWORD',
    payload: password,
  });
  
  export const loginUser = (user) => ({
    type: 'LOGIN_USER',
    payload: user,
  });
  