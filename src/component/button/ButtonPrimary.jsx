const ButtonPrimary = (props) => {
  const {
    type,
    text,
    disabled,
    onClick
  } = props

  return(
    <button
      className="button-primary"
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default ButtonPrimary