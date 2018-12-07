import axios from "axios";

//action types
const GET_USER = "GET_USER";

//initial state

const initialState = {
  user: [],
  loggedIn: false
};

//action creators
export const getUser = () => {
  return {
    type: GET_USER,
    payload: axios.get("/api/user")
  };
};

//reducer

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_USER}_PENDING`:
      return {
        ...state,
        loggedIn: false
      };
    case GET_USER + "_FULFILLED":
      console.log(action.payload);
      return {
        ...state,
        loggedIn: true,
        user: action.payload.data
      };
    case `${GET_USER}_REJECTED`:
      return {
        ...state,
        loggedIn: false
      };
    default:
      return state;
  }
}
