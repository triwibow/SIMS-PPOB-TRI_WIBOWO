const PhotoProfile = (props) => {
  const {
    user
  } = props

  return (
    <div className="profile-photo-sm mb-4">
      {user ? (
        <img 
          src={user.profile_image} 
          alt="photo profile" 
        />
      ):(
        <img 
          src={require('../../assets/images/profile-default.jpg')} 
          alt="photo profile" 
        />
      )}
    </div>
  )
}

export default PhotoProfile