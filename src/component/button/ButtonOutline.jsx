const ButtonOutline = (props) => {
    const {
      type,
      text,
      className,
      disabled
    } = props
  
    return(
      <button
        className={`button-outline-danger ${className}`}
        type={type}
        disabled={disabled}
      >
        {text}
      </button>
    )
  }
  
  export default ButtonOutline