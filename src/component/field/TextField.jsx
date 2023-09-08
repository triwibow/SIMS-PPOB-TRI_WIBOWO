import React from "react";

const TextField = (props) => {
  const {
    wrapperClass,
    className,
    label,
    placeholder,
    prefixIcon,
    name,
    onChange,
    value
  } = props

  const handleChange = (e) => {
    console.log(e.target.value)
    onChange(name, e.target.value, false)
  } 

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
          value={value}
          onChange={handleChange}
          
        />
      </div>
    </div>
  )
}

export default TextField