import { IoEyeOutline } from 'react-icons/io5'
import PhotoProfile from '../profile/PhotoProfile'
import TextButton from '../button/TextButton'
import saldoBg from '../../assets/images/bg-saldo.png'
import { useSelector } from 'react-redux'

const BannerSaldo = () => {

  const { user } = useSelector(state => state.user)

  console.log(user)

  return (
    <div className='container mt-5 mb-section'>
      <div className='row'>
        <div className='col-md-6'>
          <PhotoProfile />
          <p className='mb-3 text-app-dark text-head-4'>Selamat Datang,</p>
          <h1 className='text-app-dark text-head-2 fw-bold'>{user?.first_name} {user?.last_name}</h1>
        </div>
        <div className='col-md-6'>
          <div className='saldo-wrapper'>
            <div className='z-index-100'>
              <span className='text-app-white mb-3 d-block'>
                Saldo anda
              </span>
              <h2 className='text-app-white text-head-4 fw-bold mb-3'>Rp 1.000.000</h2>
              <div className='d-flex align-items-center'>
                <TextButton 
                  text="Lihat saldo"
                  className="text-app-white text-app-md me-2"
                />
                <IoEyeOutline color='#FFFFFF' />
              </div>
            </div>
            <img 
              src={saldoBg} 
              alt="bg-saldo"
              className='img-fluid'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerSaldo