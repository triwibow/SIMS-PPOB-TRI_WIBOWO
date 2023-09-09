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
    value,
    touched,
    error,
    disabled
  } = props

  const handleChange = (e) => {
    onChange(name, e.target.value, false)
  } 

  const isError = touched && error ? true:false;

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
          type={'text'}
          disabled={disabled? disabled:false}
        />
      </div>
      {isError && (
				<small className="ms-2 text-app-danger text-app-sm">
					{error}
				</small>
			)}
    </div>
  )
}

export default TextField