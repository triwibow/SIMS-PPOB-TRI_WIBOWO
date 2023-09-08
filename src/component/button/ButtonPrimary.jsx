import { Spinner, Button } from "reactstrap"

const ButtonPrimary = (props) => {
  const {
    type,
    text,
    disabled,
    onClick,
    loading
  } = props

  return(
    <Button
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
    </Button>
  )
}

export default ButtonPrimary