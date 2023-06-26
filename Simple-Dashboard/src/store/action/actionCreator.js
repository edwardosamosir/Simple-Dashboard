import { baseUrl } from "../../config/api"
import {
  USERS_ERROR,
  USERS_FETCH_ALL,
  USERS_FETCH_ID,
  USERS_FETCH_LOADING,
  SEARCH_QUERY
} from "./actionType";

export const searchQuery = (payload) => {
  return {
    type: SEARCH_QUERY,
    payload
  }
}

export const fetchUsersLoading = () => {
  return {
    type: USERS_FETCH_LOADING,
    payload: false
  }
}

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch({ type: USERS_FETCH_LOADING, payload: true })
    fetch(`${baseUrl}/users?limit=0`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Internal Server Error");
        }
      })
      .then((data) => {
        dispatch({ type: USERS_FETCH_ALL, payload: data.users });
      })
      .catch((error) => {
        dispatch({ type: USERS_ERROR, payload: error?.message });
      })
      .finally(() => {
        const action = fetchUsersLoading()
        dispatch(action)
      });
  };
};