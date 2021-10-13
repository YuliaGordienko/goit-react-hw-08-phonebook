import { createAction } from "@reduxjs/toolkit";

// export const addContact = createAction("contacts/Add");
// export const addContacts = createAction("contacts/ADD_CONTACTS");
const filterForCont = createAction("contacts/Filter");
// export const deleteContact = createAction("contacts/DELETE");

// export const fetchContactsRecvest = createAction(
//   "/contacts/fetchContactsRecvest"
// );
// export const fetchContactsSuccess = createAction(
//   "/contacts/fetchContactsSuccess"
// );
// export const fetchContactsError = createAction("/contacts/fetchContactsError");

const fetchContactsRequest = createAction("contacts/fetchContactsRequest");
const fetchContactsSuccess = createAction("contacts/fetchContactsSuccess");
const fetchContactsError = createAction("contacts/fetchContactsError");

const addContactRequest = createAction("contacts/addContactRequest");
const addContactSuccess = createAction("contacts/addContactSuccess");
const addContactError = createAction("contacts/addContactError");

const deleteContactRequest = createAction("contacts/deleteContactRequest");
const deleteContactSuccess = createAction("contacts/deleteContactSuccess");
const deleteContactError = createAction("contacts/deleteContactError");

export {
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
};
