import s from "./FiltrByName.module.css";
import React from "react";
const FiltrByName = ({ value, onChange }) => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        className={s.input}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
export default FiltrByName;
