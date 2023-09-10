const PhotoProfile = (props) => {
  const {
    user
  } = props

  const nullImage = "https://minio.nutech-integrasi.app/take-home-test/null"

  return (
    <div className="profile-photo-sm mb-4">
      {user?.profile_image != nullImage ? (
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