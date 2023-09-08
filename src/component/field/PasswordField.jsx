import React, { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline} from 'react-icons/io5'

const PasswordField = (props) => {
  const [isShow, setShow] = useState(false)
  const [type, setType] = useState('password')

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
    error
  } = props

  const handleEyeClick = () => {

    if(isShow) {
      setType('password')
    } else {
      setType('text')
    }

    setShow(!isShow)
  }

  const handleChange = (e) => {
    onChange(name, e.target.value, false)
  } 

  const isError = touched && error ? true:false;

  return(
    <div className={`input-field-container ${wrapperClass}`}>
      {label && (
        <label className={`text-input-label`}>{label}</label>
      )}
      <div className="input-field-wrapper">
        <div className={`text-input-prefix-icon`}>
          {prefixIcon}
        </div>
        <input 
          className={`text-input-field ${className}`}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={handleChange}
        />
        <div className={`text-input-suffix-icon`}>
          <button
            type="button"
            onClick={handleEyeClick}
          >
            {!isShow ? (
              <IoEyeOutline />
            ):(
              <IoEyeOffOutline />
            )}
          </button>
        </div>
      </div>
      {isError && (
				<small className="ms-2 text-app-danger text-app-sm">
					{error}
				</small>
			)}
    </div>
  )
}

export default PasswordField