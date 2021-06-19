import axios from 'axios';
import actionTypes from './actionsTypes';

const url = 'http://localhost:4000/funnySk8/schools';
const urlLogin = 'http://localhost:4000/login';
const urlUserData = 'http://localhost:4000/token';

export function getAll() {
  return async (dispatch) => {
    const { data } = await axios(url);
    dispatch({
      type: actionTypes.GET_ALL,
      schoolList: data
    });
  };
}

export function getById(itemId) {
  return async (dispatch) => {
    const { data } = await axios(`${url}/${itemId}`);
    dispatch({
      type: actionTypes.GET_BY_ID,
      itemSelected: data
    });
  };
}

export function createItem(itemSelected) {
  return async (dispatch) => {
    const { data } = await axios.post(url, itemSelected);
    dispatch({
      type: actionTypes.CREATE_ITEM,
      itemSelected: data
    });
  };
}

export function deleteById(itemId) {
  return async (dispatch) => {
    const { data } = await axios.delete(`${url}/${itemId}`);
    dispatch({
      type: actionTypes.DELETE_ITEM,
      itemSelected: data
    });
  };
}

export function updateById(itemId, propierty) {
  console.log(`${url}/${itemId}`);
  return async (dispatch) => {
    const { data } = await axios.put(`${url}/${itemId}`, propierty);
    dispatch({
      type: actionTypes.UPDATE_ITEM,
      itemSelected: data
    });
  };
}

export function logIn(loginUser) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(urlLogin, loginUser);
      dispatch({
        type: actionTypes.LOG_IN,
        user: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOG_IN,
        user: {}
      });
    }
  };
}

export function getUserData(token) {
  return async (dispatch) => {
    try {
      const { data } = await axios(urlUserData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      dispatch({
        type: actionTypes.GET_USER_DATA,
        user: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_USER_DATA,
        user: {}
      });
    }
  };
}
