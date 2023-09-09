import { IoEyeOutline } from 'react-icons/io5'
import PhotoProfile from '../profile/PhotoProfile'
import TextButton from '../button/TextButton'
import saldoBg from '../../assets/images/bg-saldo.png'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import { useEffect } from 'react'
import { modalError } from '../../store/actions/modalAction'
import { fetchData as fetchUser } from '../../store/actions/userAction'
import { fetchData as fetchBalance } from '../../store/actions/balanceAction'
import { formatRupiah } from '../../helper/formatter'

const SkeletonUser = () => {
  return (
    <>
      <Skeleton width={'20%'} height={80} className='mb-3' />
      <Skeleton height={40} className='mb-2' />
      <Skeleton height={40} />
    </>
  )
}

const BannerSaldo = () => {
  const dispatch = useDispatch()
  const { user, status:statusUser, message:messageUser } = useSelector(state => state.user)
  const { balance, status:statusBalance, message:messageBalance } = useSelector(state => state.balance)

  useEffect(() => {
    dispatch(fetchUser())
    dispatch(fetchBalance())
  }, [])

  useEffect(() => {
    if(statusUser == 'error'){
      dispatch(modalError(true, {description:messageUser}))
    }

    if(statusBalance == 'error'){
      dispatch(modalError(true, {description:messageBalance}))
    }
  }, [statusUser])

  return (
    <div className='container mt-5 mb-section'>
      <div className='row'>
        <div className='col-md-6'>
          {statusUser == 'loading' ? (
            <SkeletonUser />
          ):(
            <>
                <PhotoProfile />
                <p className='mb-3 text-app-dark text-head-4'>Selamat Datang,</p>
                <h1 className='text-app-dark text-head-2 fw-bold text-capitalize'>{user?.first_name} {user?.last_name}</h1>
              </>
          )}
        </div>
        <div className='col-md-6'>
          <div className='saldo-wrapper'>
            <div className='z-index-100'>
              <span className='text-app-white mb-3 d-block'>
                Saldo anda
              </span>
              <h2 className='text-app-white text-head-4 fw-bold mb-3'>
                {balance ? formatRupiah(balance):'Rp 0'}
              </h2>
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