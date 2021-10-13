import React from "react";
import s from "./contactslist.module.css";

export default function ContactList({ contacts, onDeleteContacts }) {
  return (
    <div className={s.wrap}>
      <p className={s.title}>Contacs:</p>
      {
        <ul className={s.list}>
          {contacts.map((contact) => (
            <li key={contact.id} className={s.item}>
              <p className={s.discribe}>
                {contact.name}: {contact.number}
              </p>
              <button
                className={s.button}
                type="button"
                onClick={() => onDeleteContacts(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      }
    </div>
  );
}
