const TextButton = (props) => {
  const {
    text,
    className,
    onClick
  } = props

  return (
    <button className={`text-button ${className}`} onClick={onClick}>
      {text}
    </button>
  )
}

export default TextButton