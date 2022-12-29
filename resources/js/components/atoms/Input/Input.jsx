import { Skeleton } from "primereact/skeleton";
import React from "react";

import "./Input.scss"

const Input = ({ title, type, placeholder, id, name, onChange, skeleton, width, className }) => {
  return !skeleton ? (
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
  ):(
    <Skeleton width={width || "100%"} className={className} height="48px" />
  )
};

export default Input;
