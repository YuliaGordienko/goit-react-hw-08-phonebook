import { createSelector } from "@reduxjs/toolkit";
export const getContactsSelector = (state) => state.contacts.items;
export const getFilterQuery = (state) => state.contacts.filterQuery;

export const arrayContacs = createSelector(
  [getContactsSelector, getFilterQuery],
  (items, filterQuery) => {
    const filterLowerCase = filterQuery?.toLowerCase();
    return items.filter((contact) =>
      contact?.name?.toLowerCase().includes(filterLowerCase)
    );
  }
);
