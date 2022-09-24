import React from "react";
import "./Input.scss";

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className="input-container">
      <label className="input-label" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        className="input"
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className="input-error">{error}</p>}
    </div>
  );
};

export default Input;
