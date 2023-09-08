import React from "react";

const TextInput = (props) => {
  const {className} = props

  return(
    <input 
      className={`text-input-field ${className}`}
    />
  )
}

export default TextInput