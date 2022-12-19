import React from "react";

import "./Input.scss"

const Input = ({ title, type, placeholder, id, name, onChange }) => {
  return (
    <>
      <p className="title">{title}</p>
      <div className="container-input">
        <input
          type={type}
          className="input"
          placeholder={placeholder}
          id={id}
          name={name}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Input;
