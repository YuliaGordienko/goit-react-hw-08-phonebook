import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "../Input/Input";
import ContactsList from "../ContactsList/ContactsList";
import FiltrByName from "../FiltrByName/FiltrByName";
import s from "../PhoneBook/PhoneBook.module.css";
import { filterForCont } from "../../Redux/Contacts/contacts-actions";
import {
  addContact,
  deleteContact,
  fetchContacts,
} from "../../Redux/Contacts/contacts-operations";
import {
  getContactsSelector,
  getFilterQuery,
  arrayContacs,
} from "../../Redux/Contacts/contacts-selectors";

export default function PhoneBook() {
  const items = useSelector(getContactsSelector);
  const filterQuery = useSelector(getFilterQuery);
  const arrayAfterFilter = useSelector(arrayContacs);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact(name, number));
    setName("");
    setNumber("");
  };

  const handleFilterChange = (e) => {
    dispatch(filterForCont(e.currentTarget.value));
  };
  const deleteContacs = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div style={{ marginLeft: "20px" }}>
      <h1 className={s.title}>Phonebook</h1>
      <Input
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        valueName={name}
        valueNumber={number}
      />
      <FiltrByName value={filterQuery} onChange={handleFilterChange} />
      {items.length > 0 && (
        <ContactsList
          contacts={arrayAfterFilter}
          onDeleteContacts={deleteContacs}
        />
      )}
    </div>
  );
}
