import React from 'react'
import { IoCashOutline } from 'react-icons/io5'
import BannerSaldo from '../../component/banner/BannerSaldo'
import ButtonPrimary from '../../component/button/ButtonPrimary'
import TextField from '../../component/field/TextField'

const Pay = () => {

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
            <form className=''>
              <TextField 
                wrapperClass="mb-3"
                placeholder="masukkan nominal pembayaran"
                prefixIcon={<IoCashOutline />}
              />        
              <ButtonPrimary 
                type="button"
                text="Bayar"
              />
            </form>
          </div>
        </div>
      </div>
    </>

  )
}

export default Pay