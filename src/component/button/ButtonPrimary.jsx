import { Spinner } from "reactstrap"

const ButtonPrimary = (props) => {
  const {
    type,
    text,
    disabled,
    onClick,
    loading
  } = props

  return(
    <button
      className="button-primary"
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {loading? (
        <Spinner color="light" size={'sm'}/>
      ):(
        <>
          {text}
        </>
      )}
    </button>
  )
}

export default ButtonPrimary