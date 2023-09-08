const ButtonPrimary = (props) => {
  const {
    type,
    text
  } = props

  return(
    <button
      className="button-primary"
      type={type}
    >
      {text}
    </button>
  )
}

export default ButtonPrimary