import { Button, Spinner } from 'reactstrap'

const ButtonOutline = (props) => {
    const {
      type,
      text,
      className,
      disabled,
      loading
    } = props
  
    return(
      <Button
        className={`button-outline-danger ${className}`}
        type={type}
        disabled={disabled}
      >
        {loading? (
          <Spinner color="danger" size={'sm'}/>
        ):(
          <>
            {text}
          </>
        )}
      </Button>
    )
  }
  
  export default ButtonOutline