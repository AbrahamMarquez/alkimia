import React from "react";

import "./TextArea.scss"

const TextArea = ({ title, placeholder, id, name, onChange }) => {
  return (
    <>
      <p className="title-area">{title}</p>
      <div className="container-textarea">
        <textarea
          className="textarea"
          placeholder={placeholder}
          id={id}
          name={name}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default TextArea;
