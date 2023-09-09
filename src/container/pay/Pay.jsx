import React, { useEffect, useState } from 'react'
import { IoCashOutline } from 'react-icons/io5'
import BannerSaldo from '../../component/banner/BannerSaldo'
import ButtonPrimary from '../../component/button/ButtonPrimary'
import TextField from '../../component/field/TextField'
import { fetchData } from '../../store/actions/serviceAction'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { formatRupiah } from '../../helper/formatter'
import { transaction, resetStatus } from '../../store/actions/transactionAction'
import { modalError, modalSuccess } from '../../store/actions/modalAction'
import ModalError from '../../component/modal/ModalError'
import ModalSuccess from '../../component/modal/ModalSuccess'

const Pay = () => {
  const dispatch = useDispatch()
  const { services, status:statService, message:msgService } = useSelector(state => state.service)
  const {status:statTrans, message:msgTrans} = useSelector(state => state.transaction)
  const { code } = useParams()
  const [data, setData] = useState(null)
  
  useEffect(() => {
    dispatch(fetchData())
  }, [])

  useEffect(() => {
    setData(() => {
      const result = services.filter(item => {
        return item.service_code == code
      })
      if(result.length < 1){
        return null
      }
      return result[0]
    })
  }, [services])

  useEffect(() => {
    if(statTrans == 'error'){
      dispatch(modalError(true, {description:msgTrans}))
    }
    if(statTrans == 'success'){
      dispatch(modalSuccess(true, {description:msgTrans}))
    }
  }, [statTrans])

  useEffect(() => {
    if(statService == 'error'){
      dispatch(modalError(true, {description:msgService}))
    }
  }, [statService])
  
  const onSubmit = () => {
    const payload = {
      service_code:code
    }

    dispatch(transaction(payload))
  }

  return(
    <>
      <BannerSaldo /> 
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-5'> 
            <p className='mb-3 text-app-dark text-head-4'>PemBayaran</p>
            
            <div className='d-flex align-items-center'>
              {data && (
                <img 
                  src={data.service_icon} 
                  alt="icon" 
                  className='me-3' 
                  style={{width:'30px', height:'30px', objectFit:'contain'}}
                />
              )}
              <p className='text-app-dark text-head-5 fw-bold'>{data && data.service_name}</p>
            </div>
          </div>
          <div className='col-md-12'>
            <TextField 
              wrapperClass="mb-3"
              placeholder="masukkan nominal pembayaran"
              prefixIcon={<IoCashOutline />}
              value={data?(formatRupiah(data.service_tariff)):''}
              disabled
            />        
            <ButtonPrimary 
              type="button"
              text="Bayar"
              loading={statTrans == 'loading'}
              disabled={statService == 'loading' || statService == 'error'}
              onClick={onSubmit}
            />
          </div>
        </div>
      </div>
      <ModalError 
        onClose={() => {
          dispatch(resetStatus())
        }}
      />
      <ModalSuccess 
        onClose={() => {
          dispatch(resetStatus())
        }}
      />
    </>

  )
}

export default Pay