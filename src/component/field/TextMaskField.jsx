import React from "react";

const TextMaskField = (props) => {
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
		mask,
		demask
  } = props

  const handleChange = (e) => {
		const val = demask(e.target.value)
		console.log('val : ',val)
    onChange(name, mask(val), false)
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

export default TextMaskField