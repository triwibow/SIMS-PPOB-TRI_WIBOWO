const PhotoProfile = (props) => {
    const {
        className
    } = props

    return (
      <div className={`profile-photo-md ${className}`}>
        <img 
          src={require('../../../assets/images/profile-photo.png')} 
          alt="photo profile" 
        />
      </div>
    )
  }
  
  export default PhotoProfile