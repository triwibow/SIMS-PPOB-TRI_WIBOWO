import { useRef } from 'react'
import { IoPencil } from 'react-icons/io5'
import { modalError } from '../../../store/actions/modalAction'
import { useDispatch } from 'react-redux'
import { updateProfileImage } from '../../../store/actions/userAction'

const Button = (props) => {
  const {
    onClick
  } = props

  return (
    <button 
      className='button-icon-circle'
      type='button'
      onClick={onClick}
    >
      <IoPencil />
    </button>
  )
}

const PhotoProfile = (props) => {
  const {
    user,
    className
  } = props

  const dispatch = useDispatch()
  const inputRef = useRef(null)

  const uploadProfile = (file) => {
    const payload = new FormData()
    payload.append('file', file)

    dispatch(updateProfileImage(payload))
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    const allowedImageTypes = ['image/jpeg', 'image/png', 'image/gif']

    if(file){
      if(!allowedImageTypes.includes(file.type)){
        dispatch(modalError(true, {
          description:'Jenis file tidak didukung. Hanya gambar (JPEG, PNG, GIF) yang diizinkan.'
        }))

        inputRef.current.value=""
        return false
      }

      if(file.size > 100 * 1024){
        dispatch(modalError(true, {
          description:'Ukuran file terlalu besar. Maksimal 100kb'
        }))

        inputRef.current.value=""
        return false
      }

      uploadProfile(file)
      
    }

    return true
  }

  return (
    <div className={`profile-photo-md ${className}`}>
      <input style={{display:'none'}} type="file" name="photo" ref={inputRef} onChange={handleFileChange} />
      {user ? (
        <img 
          src={user.profile_image} 
          alt="photo profile" 
        />
      ):(
        <img 
          src={require('../../../assets/images/profile-default.jpg')} 
          alt="photo profile" 
        />
      )}
      <div className='profile-photo-md-button'>
        <Button 
          onClick={() => {
            inputRef.current.click()
          }}
        />
      </div>
    </div>
  )
}
  
export default PhotoProfile