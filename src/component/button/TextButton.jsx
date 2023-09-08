const TextButton = (props) => {
  const {
    text,
    className
  } = props

  return (
    <button className={`text-button ${className}`}>
      {text}
    </button>
  )
}

export default TextButton