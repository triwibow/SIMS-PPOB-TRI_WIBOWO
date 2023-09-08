import React from "react";

const TextField = (props) => {
  const {
    wrapperClass,
    className,
    label,
    placeholder,
    prefixIcon
  } = props

  return(
    <div className={`input-field-container ${wrapperClass}`}>
      {label && (
        <label className={`text-app-sm mb-2 fw-bold`}>{label}</label>
      )}
      <div className="input-field-wrapper">
        <div className={`text-input-prefix-icon`}>
          {prefixIcon}
        </div>
        <input 
          className={`text-input-field ${className}`}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}

export default TextField