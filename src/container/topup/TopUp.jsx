import React from 'react'
import { IoCashOutline } from 'react-icons/io5'
import BannerSaldo from '../../component/banner/BannerSaldo'
import ButtonPrimary from '../../component/button/ButtonPrimary'
import TextField from '../../component/field/TextField'

const TopUp = () => {

  const nominal = [
    {
      id:'1',
      text:"Rp 10.000"
    },
    {
      id:'2',
      text:"Rp 20.000"
    },
    {
      id:'3',
      text:"Rp 50.000"
    },
    {
      id:'4',
      text:"Rp 100.000"
    },
    {
      id:'5',
      text:"Rp 250.000"
    },
    {
      id:'6',
      text:"Rp 500.000"
    }
  ]

  const _renderNominal = (item) => {
    return (
      <div className='col-md-4 mb-2' key={item.id}>
        <button className='button-outline-white text-app-primary text-app-md'>
          {item.text}
        </button>
      </div>
    )
  } 

  return(
    <>
      <BannerSaldo /> 
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-5'> 
            <p className='mb-3 text-app-dark text-head-4'>Silahkan masukan</p>
            <h1 className='text-app-dark text-head-2 fw-bold'>Nominal Top Up</h1>
          </div>
          <div className='col-md-7'>
            <form className=''>
              <TextField 
                wrapperClass="mb-3"
                placeholder="masukkan nominal Top Up"
                prefixIcon={<IoCashOutline />}
              />        
              <ButtonPrimary 
                type="button"
                text="Top Up"
              />
            </form>
          </div>
          <div className='col-md-5'>
            <div className='row'>
              {nominal.map(item => {
                return _renderNominal(item)
              })}
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default TopUp