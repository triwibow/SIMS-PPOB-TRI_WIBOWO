const ButtonPrimary = (props) => {
  const {
    type,
    text,
    disabled
  } = props

  return(
    <button
      className="button-primary"
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default ButtonPrimary