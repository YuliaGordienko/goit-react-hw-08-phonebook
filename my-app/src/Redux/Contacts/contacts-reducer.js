import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  filterForCont,
} from "./contacts-actions";
const addContactReducer = (state, { payload }) => {
  if (state.find(({ name }) => name === payload.name)) {
    alert(`${payload.name} is already in contacts.`);
    return [...state];
  }
  return [...state, payload];
};

const deleteContactReducer = (state, { payload }) =>
  state.filter(({ id }) => id !== payload);

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: addContactReducer,
  [deleteContactSuccess]: deleteContactReducer,
});

const filterQuery = createReducer("", {
  [filterForCont]: (_, { payload }) => payload,
});
const isLoading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
});

const error = createReducer(null, {
  [fetchContactsError]: (_, action) => action.payload,
  [fetchContactsRequest]: () => null,
});
export default combineReducers({
  items,
  filterQuery,
  isLoading,
  error,
});
