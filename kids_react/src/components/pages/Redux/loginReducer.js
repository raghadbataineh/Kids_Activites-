// userReducer.js

const initialState = {
    email: '',
    password: '',
    loggedIn: false,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER_EMAIL':
        return { ...state, email: action.payload };
      case 'SET_USER_PASSWORD':
        return { ...state, password: action.payload };
      case 'LOGIN_USER':
        return { ...state, loggedIn: true };
      default:
        return state;
    }
  };
  
  export default userReducer;
  