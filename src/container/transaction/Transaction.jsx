import React from 'react'
import { IoCashOutline } from 'react-icons/io5'
import BannerSaldo from '../../component/banner/BannerSaldo'
import ButtonPrimary from '../../component/button/ButtonPrimary'
import TextField from '../../component/field/TextField'
import CardTransaction from './component/CardTransaction'

const Transaction = () => {

  const transaction = [
    {
      id:"1",
      nominal:"+ Rp 10.000"
    },
    {
      id:"2",
      nominal:"- Rp 40.000"
    }
  ]

  const _renderItem = (item) => {
    return (
      <div className='col-md-12 mb-4' key={item.id}>
        <CardTransaction />
      </div>
    )
  }

  return(
    <>
      <BannerSaldo /> 
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-3'> 
            <h5 className='mb-3 text-app-dark text-head-5 fw-bold'>Semua Transaksi</h5>
          </div> 

          {transaction.map(item => {
            return _renderItem(item)
          })}
        </div>
      </div>
    </>

  )
}

export default Transaction