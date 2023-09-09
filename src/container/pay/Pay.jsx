import React, { useEffect, useState } from 'react'
import { IoCashOutline } from 'react-icons/io5'
import BannerSaldo from '../../component/banner/BannerSaldo'
import ButtonPrimary from '../../component/button/ButtonPrimary'
import TextField from '../../component/field/TextField'
import { fetchData } from '../../store/actions/serviceAction'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { formatRupiah } from '../../helper/formatter'

const Pay = () => {
  const dispatch = useDispatch()
  const { services, status:statusService } = useSelector(state => state.service)
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
  
  const onSubmit = () => {
    
  }

  return(
    <>
      <BannerSaldo /> 
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-5'> 
            <p className='mb-3 text-app-dark text-head-4'>PemBayaran</p>
            <p className='mb-3 text-app-dark text-head-4 fw-bold'>Listrik Prabayar</p>
          </div>
          <div className='col-md-12'>
            <TextField 
              wrapperClass="mb-3"
              placeholder="masukkan nominal pembayaran"
              prefixIcon={<IoCashOutline />}
              value={data && (formatRupiah(data.service_tariff))}
              disabled
            />        
            <ButtonPrimary 
              type="button"
              text="Bayar"
              loading={false}
              disabled={statusService == 'loading'}
            />
          </div>
        </div>
      </div>
    </>

  )
}

export default Pay