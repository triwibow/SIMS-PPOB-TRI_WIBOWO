import React, { useEffect } from 'react'
import BannerSaldo from '../../component/banner/BannerSaldo'
import CardTransaction from './component/CardTransaction'
import { useDispatch, useSelector } from 'react-redux'
import { modalError } from '../../store/actions/modalAction'
import ModalError from '../../component/modal/ModalError'
import { fetchTransactions, resetLimit } from '../../store/actions/transactionAction'
import TextButton from '../../component/button/TextButton'


const Transaction = () => {

  const dispatch = useDispatch()
  const { status, transactions, message, limit, offset } = useSelector(state => state.transaction)

  useEffect(() => {
    dispatch(fetchTransactions({limit:limit, offset:offset}))
  }, [])

  useEffect(() => {
    if(status == 'error'){
      dispatch(modalError(true, {description:message}))
    }
  }, [status])

  useEffect(() => {
    return () => {
      dispatch(resetLimit())
    }
  }, [])

  const handleClick = () => {
    const param = {
      limit: limit + 5,
      offset:0
    }
    dispatch(fetchTransactions(param))
  }

  const _renderItem = (item) => {
    return (
      <div className='col-md-12 mb-4' key={item.invoice_number}>
        <CardTransaction 
          item={item}
        />
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

          {transactions.length < 1 ? (
            <div className='col-md-12'>
              <h6 className='text-app-primary text-head-5 text-center'>Belum ada transaksi</h6>
            </div>
          ):(
            <>
              {transactions.map(item => {
                return _renderItem(item)
              })}

              <TextButton 
                className="text-app-danger mb-5"
                text="Show More"
                onClick={handleClick}
              />
            </>
          )}
        </div>
      </div>
      <ModalError />
    </>

  )
}

export default Transaction