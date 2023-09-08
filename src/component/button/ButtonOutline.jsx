const ButtonOutline = (props) => {
    const {
      type,
      text,
      className
    } = props
  
    return(
      <button
        className={`button-outline-danger ${className}`}
        type={type}
      >
        {text}
      </button>
    )
  }
  
  export default ButtonOutline