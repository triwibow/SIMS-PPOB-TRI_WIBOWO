import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../../store/actions/serviceAction'
import { modalError } from '../../../store/actions/modalAction'
import Skeleton from 'react-loading-skeleton'
import { useNavigate } from 'react-router-dom'

const SkeletonLoader = () => {
  return (
    <>
      <div className='col-1'>
        <Skeleton height={60} className='mb-2' />
        <Skeleton height={20} />
      </div>
    </>
  )
}

const Category = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { services, status, message } = useSelector(state => state.service)

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  useEffect(() => {
    if(status == 'error'){
      dispatch(modalError(true, {description:message}))
    }
  }, [status])

  const _renderItem = (item) => {
    return (
      <div className='col-1' key={item.service_code}>
        <button className='button-icon-text' onClick={() => navigate(`/pay/${item.service_code}`, {replace:true})}> 
          <img src={item.service_icon} alt={`icon ${item.service_name}`} className='mb-2 d-block mx-auto' />
          <span className='text-app-sm text-center'>{item.service_name}</span>
        </button>
      </div>
    )
  }

  const _renderSkeleton = () => {
    let data = [];
    for (var i = 0; i < 12; i++) {
      data.push(<SkeletonLoader />);
    }
    return data;
  }
 
  return (
    <div className="container"> 
      <div className="row">
        {status == 'loading' ? (
          _renderSkeleton()
        ):(
          services.map(item => {
            return _renderItem(item)
          })
        )}
      </div>
    </div>
  )
}

export default Category